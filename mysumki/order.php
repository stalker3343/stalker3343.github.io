<?php

if (isset($_POST['name']) && !empty($_POST['phone'])) {
  $webmaster_id = '';
  $utm_data = set_cookies($_COOKIE);
  if (isset($_COOKIE['_traf_source'])) {
    list($source, $trf_data) = explode('_/_', $_COOKIE['_traf_source']);
    if ($source == 'wmid') {          
      $webmaster_id = $trf_data;
    }        
  }  
  $order_id = send_order_to_lv_webmaster($_POST, $utm_data, $webmaster_id);
  $order_token = md5('e80d235e' . $order_id);
  setcookie('order_token', $order_token, time() + 60*60*24*365, '/');
  header('Location: /order/success.php?id=' . $order_id . '&token=' . $order_token);      
  die();
}
header('Location: /');
die();

function send_order_to_lv_webmaster($data,$utm,$webmaster_id='') {
    $dt = [
        'api_token' => 'e80d235e6559738c6a4665defae38b56',
        'order_webmaster_name' => $webmaster_id,
        'order_client_name' => $data['name'],
        'order_client_phone'=> $data['phone'],
        'order_offer_id' => 427,
        'order_offer_external_id' => 414,
        'order_advert_id' => 34,
        'order_webmaster_id' => 182,
        'order_client_geo_ip' => get_ip(),
        'order_backoffice_status_id' => 1,
        'order_cc_process' => 1,
        'utm_source' => $utm['utm_source'],
        'utm_content' => $utm['utm_content'],
        'utm_term' => $utm['utm_term'],
        'utm_campaign' => $utm['utm_campaign'],
        'utm_medium' => $utm['utm_medium'],
        'utm_domain' => 'http://q18.pokypaika.ru',
    ];

    $order_data = http_build_query($dt);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,"https://dashboard.telesales-cc.ru/api/order/store?" . $order_data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $server_output = curl_exec ($ch);
    curl_close ($ch);

    $server_output = json_decode($server_output);
    return $server_output->data->order_id;

}

function get_ip()
{
    if (!empty($_SERVER['HTTP_CLIENT_IP']))
    {
        $ip=$_SERVER['HTTP_CLIENT_IP'];
    }
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
    {
        $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    else
    {
        $ip=$_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}

function set_cookies($cookies)
{
  $coo = array(
      'utm_source' => '',
      'utm_content' => '',
      'utm_term' => '',
      'utm_campaign' => '',
      'utm_medium' => ''
      );

  if (isset($_COOKIE['utm_source']))
    $coo['utm_source'] = $_COOKIE['utm_source'];
  if (isset($_COOKIE['utm_content']))
    $coo['utm_content'] = $_COOKIE['utm_content'];
  if (isset($_COOKIE['utm_term']))
    $coo['utm_term'] = $_COOKIE['utm_term'];
  if (isset($_COOKIE['utm_campaign']))
    $coo['utm_campaign'] = $_COOKIE['utm_campaign'];
  if (isset($_COOKIE['utm_medium']))
    $coo['utm_medium'] = $_COOKIE['utm_medium'];

  return $coo;
}
?>

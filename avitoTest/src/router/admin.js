/* eslint-disable import/no-unresolved */
import Admin from '@/view/admin/Admin.vue';
import Products from '@/view/admin/Products.vue';
import Edit from '@/view/admin/Edit.vue';
import New from '@/view/admin/New.vue';

export default {
  path: '/admin',
  component: Admin,

  children: [
    {
      path: '',
      component: Products,
      name: 'Products'
    },
    {
      path: 'edit/:id',
      component: Edit,
      name: 'Edit',
      props: true
    },
    {
      path: 'new',
      component: New,
      name: 'New'
    }
  ]
};

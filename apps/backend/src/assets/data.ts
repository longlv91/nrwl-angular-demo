import { Role } from '@nrwl-workspace/entities';

export const navData = [
    {
      title: 'Applications',
      menu: [
        {
          label: 'Dashboards',
          keyLang: '',
          icon: 'dashboard',
          routerLink: 'apps/dashboards',
          order: 0,
          hasChild: true,
          permissions: [Role.ADMIN, Role.SUPER_USER],
          children: [
            {
              label: 'Analytics',
              keyLang: '',
              icon: '',
              routerLink: 'apps/dashboards/analytics',
              order: 0,
              permissions: [Role.ADMIN],
              hasChild: false,
              children: []
            },
            {
              label: 'Project',
              keyLang: '',
              icon: '',
              routerLink: 'apps/dashboards/project',
              order: 1,
              hasChild: false,
              permissions: [Role.ADMIN, Role.SUPER_USER],
              children: [
                
              ]
            }
          ]
        },
        {
          label: 'Calendar',
          keyLang: '',
          icon: 'calendar',
          routerLink: 'apps/calendar',
          order: 1,
          hasChild: false,
          permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
          children: []
        },
        {
          label: 'E-Commerce',
          keyLang: '',
          icon: 'shopping-cart',
          routerLink: 'apps/ecommerce',
          order: 2,
          hasChild: true,
          permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
          children: [
            {
              label: 'Products',
              keyLang: '',
              icon: '',
              routerLink: 'apps/ecommerce/products',
              order: 0,
              hasChild: false,
              permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
              children: []
            },
            {
              label: 'Product Detail',
              keyLang: '',
              icon: '',
              routerLink: 'apps/ecommerce/product-detail',
              order: 1,
              hasChild: false,
              permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
              children: []
            },
            {
              label: 'Orders',
              keyLang: '',
              icon: '',
              routerLink: 'apps/ecommerce/orders',
              order: 2,
              hasChild: false,
              permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
              children: []
            },
            {
              label: 'Order detail',
              keyLang: '',
              icon: '',
              routerLink: 'apps/ecommerce/order-detail',
              order: 3,
              hasChild: false,
              permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
              children: []
            },
          ]
        },
        {
          label: 'Academy',
          keyLang: '',
          icon: 'global',
          routerLink: 'apps/academy',
          order: 1,
          hasChild: false,
          permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
          children: []
        },
        {
          label: 'Mail',
          keyLang: '',
          icon: 'mail',
          routerLink: 'apps/mail',
          order: 1,
          hasChild: false,
          permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
          children: []
        },
        {
          label: 'Chat',
          keyLang: '',
          icon: 'message',
          routerLink: 'apps/chat',
          order: 1,
          hasChild: false,
          permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
          children: []
        },
        {
          label: 'File Manager',
          keyLang: '',
          icon: 'folder',
          routerLink: 'apps/file-manager',
          order: 1,
          hasChild: false,
          permissions: [Role.ADMIN, Role.SUPER_USER],
          children: []
        },
        {
          label: 'Contact',
          keyLang: '',
          icon: 'contacts',
          routerLink: 'apps/contact',
          order: 1,
          hasChild: false,
          permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
          children: []
        }
      ]
    },
    {
      title: 'Pages',
      menu: [
        {
          label: 'Authentication',
          keyLang: '',
          icon: 'lock',
          routerLink: 'pages/authentication',
          order: 0,
          hasChild: true,
          permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
          children: [
            {
              label: 'Login',
              keyLang: '',
              icon: '',
              routerLink: 'pages/authentication/login',
              order: 0,
              hasChild: false,
              permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
              children: []
            },
            {
              label: 'Register',
              keyLang: '',
              icon: '',
              routerLink: 'pages/authentication/register',
              order: 1,
              hasChild: false,
              permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
              children: []
            },
            {
              label: 'Forgot Password',
              keyLang: '',
              icon: '',
              routerLink: 'pages/authentication/forgot-password',
              order: 2,
              hasChild: false,
              permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
              children: []
            },
            {
              label: 'Reset Password',
              keyLang: '',
              icon: '',
              routerLink: 'pages/authentication/reset-password',
              order: 3,
              hasChild: false,
              permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
              children: []
            },
            {
              label: 'Lock Screen',
              keyLang: '',
              icon: '',
              routerLink: 'pages/authentication/lock-screen',
              order: 4,
              hasChild: false,
              permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
              children: []
            },
          ]
        },
        {
          label: 'Coming Soon',
          keyLang: '',
          icon: 'clock-circle',
          routerLink: 'pages/coming-soon',
          order: 1,
          hasChild: false,
          permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
          children: []
        },
        {
          label: 'Error',
          keyLang: '',
          icon: 'exclamation-circle',
          routerLink: 'pages/error',
          order: 2,
          hasChild: true,
          permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
          children: [
            {
              label: '404',
              keyLang: '',
              icon: '',
              routerLink: 'pages/error/not-found',
              order: 0,
              hasChild: false,
              permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
              children: []
            },
            {
              label: '500',
              keyLang: '',
              icon: '',
              routerLink: 'pages/error/server-error',
              order: 1,
              hasChild: false,
              permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
              children: []
            }
          ]
        },
        {
          label: 'Invoice',
          keyLang: '',
          icon: 'profile',
          routerLink: 'pages/invoice',
          order: 3,
          hasChild: false,
          permissions: [Role.ADMIN],
          children: []
        },
        {
          label: 'Pricing',
          keyLang: '',
          icon: 'dollar',
          routerLink: 'pages/pricing',
          order: 4,
          hasChild: false,
          permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
          children: []
        },
        {
          label: 'Profile',
          keyLang: '',
          icon: 'user',
          routerLink: 'pages/profile',
          order: 5,
          hasChild: false,
          permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
          children: []
        },
        {
          label: 'Search',
          keyLang: '',
          icon: 'search',
          routerLink: 'pages/search',
          order: 6,
          hasChild: false,
          permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
          children: []
        },
        {
          label: 'FAQ',
          keyLang: '',
          icon: 'question-circle',
          routerLink: 'pages/faq',
          order: 7,
          hasChild: false,
          permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
          children: []
        }
      ]
    },
    {
      title: 'User Interface',
      menu: [
        {
          label: 'Cards',
          keyLang: '',
          icon: 'idcard',
          routerLink: 'user-interface/cards',
          order: 0,
          hasChild: false,
          permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
          children: []
        },
        {
          label: 'Forms',
          keyLang: '',
          icon: 'question-circle',
          routerLink: 'user-interface/forms',
          order: 0,
          hasChild: false,
          permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
          children: []
        },
        {
          label: 'Icons',
          keyLang: '',
          icon: 'picture',
          routerLink: 'user-interface/icons',
          order: 0,
          hasChild: false,
          permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
          children: []
        },
        {
          label: 'Page Layouts',
          keyLang: '',
          icon: 'layout',
          routerLink: 'user-interface/page-layouts',
          order: 0,
          hasChild: false,
          permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
          children: []
        },
        {
          label: 'Colors',
          keyLang: '',
          icon: 'bg-colors',
          routerLink: 'user-interface/colors',
          order: 0,
          hasChild: false,
          permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
          children: []
        },
        {
          label: 'Helper Classes',
          keyLang: '',
          icon: 'issues-close',
          routerLink: 'user-interface/helper-classes',
          order: 0,
          hasChild: false,
          permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
          children: []
        }
      ]
    },
    {
      title: 'Documentation',
      menu: [
        {
          label: 'Changelog',
          keyLang: '',
          icon: 'history',
          routerLink: 'docs/changelog',
          order: 0,
          hasChild: false,
          permissions: [Role.ADMIN, Role.SUPER_USER, Role.NORMAL_USER],
          children: []
        }
      ]
    }
  ];
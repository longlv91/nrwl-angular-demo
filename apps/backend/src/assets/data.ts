export const navData = [
    {
      title: 'Applications',
      menu: [
        {
          label: 'Dashboards',
          icon: 'dashboard',
          routerLink: 'apps/dashboards',
          order: 0,
          hasChild: true,
          children: [
            {
              label: 'Analytics',
              icon: '',
              routerLink: 'apps/dashboards/analytics',
              order: 0,
              hasChild: false,
              children: []
            },
            {
              label: 'Project',
              icon: '',
              routerLink: 'apps/dashboards/project',
              order: 1,
              hasChild: false,
              children: [
                
              ]
            }
          ]
        },
        {
          label: 'Calendar',
          icon: 'calendar',
          routerLink: 'apps/calendar',
          order: 1,
          hasChild: false,
          children: []
        },
        {
          label: 'E-Commerce',
          icon: 'shopping-cart',
          routerLink: 'apps/ecommerce',
          order: 2,
          hasChild: true,
          children: [
            {
              label: 'Products',
              icon: '',
              routerLink: 'apps/ecommerce/products',
              order: 0,
              hasChild: false,
              children: []
            },
            {
              label: 'Product Detail',
              icon: '',
              routerLink: 'apps/ecommerce/product-detail',
              order: 1,
              hasChild: false,
              children: []
            },
            {
              label: 'Orders',
              icon: '',
              routerLink: 'apps/ecommerce/orders',
              order: 2,
              hasChild: false,
              children: []
            },
            {
              label: 'Order detail',
              icon: '',
              routerLink: 'apps/ecommerce/order-detail',
              order: 3,
              hasChild: false,
              children: []
            },
          ]
        },
        {
          label: 'Academy',
          icon: 'global',
          routerLink: 'apps/academy',
          order: 1,
          hasChild: false,
          children: []
        },
        {
          label: 'Mail',
          icon: 'mail',
          routerLink: 'apps/mail',
          order: 1,
          hasChild: false,
          children: []
        },
        {
          label: 'Chat',
          icon: 'message',
          routerLink: 'apps/chat',
          order: 1,
          hasChild: false,
          children: []
        },
        {
          label: 'File Manager',
          icon: 'folder',
          routerLink: 'apps/file-manager',
          order: 1,
          hasChild: false,
          children: []
        },
        {
          label: 'Contact',
          icon: 'contacts',
          routerLink: 'apps/contact',
          order: 1,
          hasChild: false,
          children: []
        }
      ]
    },
    {
      title: 'Pages',
      menu: [
        {
          label: 'Authentication',
          icon: 'lock',
          routerLink: 'pages/authentication',
          order: 0,
          hasChild: true,
          children: [
            {
              label: 'Login',
              icon: '',
              routerLink: 'pages/authentication/login',
              order: 0,
              hasChild: false,
              children: []
            },
            {
              label: 'Register',
              icon: '',
              routerLink: 'pages/authentication/register',
              order: 1,
              hasChild: false,
              children: []
            },
            {
              label: 'Forgot Password',
              icon: '',
              routerLink: 'pages/authentication/forgot-password',
              order: 2,
              hasChild: false,
              children: []
            },
            {
              label: 'Reset Password',
              icon: '',
              routerLink: 'pages/authentication/reset-password',
              order: 3,
              hasChild: false,
              children: []
            },
            {
              label: 'Lock Screen',
              icon: '',
              routerLink: 'pages/authentication/lock-screen',
              order: 4,
              hasChild: false,
              children: []
            },
          ]
        },
        {
          label: 'Coming Soon',
          icon: 'clock-circle',
          routerLink: 'pages/coming-soon',
          order: 1,
          hasChild: false,
          children: []
        },
        {
          label: 'Error',
          icon: 'exclamation-circle',
          routerLink: 'pages/error',
          order: 2,
          hasChild: true,
          children: [
            {
              label: '404',
              icon: '',
              routerLink: 'pages/error/not-found',
              order: 0,
              hasChild: false,
              children: []
            },
            {
              label: '500',
              icon: '',
              routerLink: 'pages/error/server-error',
              order: 1,
              hasChild: false,
              children: []
            }
          ]
        },
        {
          label: 'Invoice',
          icon: 'profile',
          routerLink: 'pages/invoice',
          order: 3,
          hasChild: false,
          children: []
        },
        {
          label: 'Pricing',
          icon: 'dollar',
          routerLink: 'pages/pricing',
          order: 4,
          hasChild: false,
          children: []
        },
        {
          label: 'Profile',
          icon: 'user',
          routerLink: 'pages/profile',
          order: 5,
          hasChild: false,
          children: []
        },
        {
          label: 'Search',
          icon: 'search',
          routerLink: 'pages/search',
          order: 6,
          hasChild: false,
          children: []
        },
        {
          label: 'FAQ',
          icon: 'question-circle',
          routerLink: 'pages/faq',
          order: 7,
          hasChild: false,
          children: []
        }
      ]
    },
    {
      title: 'User Interface',
      menu: [
        {
          label: 'Cards',
          icon: 'idcard',
          routerLink: 'user-interface/cards',
          order: 0,
          hasChild: false,
          children: []
        },
        {
          label: 'Forms',
          icon: 'question-circle',
          routerLink: 'user-interface/forms',
          order: 0,
          hasChild: false,
          children: []
        },
        {
          label: 'Icons',
          icon: 'picture',
          routerLink: 'user-interface/icons',
          order: 0,
          hasChild: false,
          children: []
        },
        {
          label: 'Page Layouts',
          icon: 'layout',
          routerLink: 'user-interface/page-layouts',
          order: 0,
          hasChild: false,
          children: []
        },
        {
          label: 'Colors',
          icon: 'bg-colors',
          routerLink: 'user-interface/colors',
          order: 0,
          hasChild: false,
          children: []
        },
        {
          label: 'Helper Classes',
          icon: 'issues-close',
          routerLink: 'user-interface/helper-classes',
          order: 0,
          hasChild: false,
          children: []
        }
      ]
    },
    {
      title: 'Documentation',
      menu: [
        {
          label: 'Changelog',
          icon: 'history',
          routerLink: 'docs/changelog',
          order: 0,
          hasChild: false,
          children: []
        }
      ]
    }
  ];
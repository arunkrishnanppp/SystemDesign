import { object } from 'prop-types';

export const config = {
  elements: [
    {
      type: 'HEADER',
      css: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      content: [
        {
          type: 'LOGO',
          src: 'logo-1.png',
          css: {
            fontSize: '24px',
            fontWeight: 'bold',
            width: '80px',
            objectFit: 'contain'
          }
        },
        {
          type: 'NAV_LINKS',
          links: [
            { label: 'Home', href: '#home' },
            { label: 'About', href: '#about' },
            { label: 'Services', href: '#services' },
            { label: 'Contact', href: '#contact' }
          ],
          css: {
            display: 'flex',
            gap: '15px',
            listStyleType: 'none'
          }
        }
      ]
    }
  ]
};

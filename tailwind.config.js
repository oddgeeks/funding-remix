// const colors = require("tailwindcss/colors");
module.exports = {
    content: ['./app/**/*.{ts,tsx,jsx,js}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
    theme: {
        container: {
            center: true,
        },
        screens: {
            // 'cs':'300px',
            'vsmll': '370px',
            'smll': '400px',
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '968px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            animation: {
                'fade-in': 'fade-in 0.5s linear forwards',
                'marquee': 'marquee var(--marquee-duration) linear infinite',
                'spin-slow': 'spin 4s linear infinite',
                'spin-slower': 'spin 6s linear infinite',
                'spin-reverse': 'spin-reverse 1s linear infinite',
                'spin-reverse-slow': 'spin-reverse 4s linear infinite',
                'spin-reverse-slower': 'spin-reverse 6s linear infinite',
            },
            keyframes: {
                'fade-in': {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                },
                'marquee': {
                    '100%': {
                        transform: 'translateY(-50%)',
                    },
                },
                'spin-reverse': {
                    to: {
                        transform: 'rotate(-360deg)',
                    },
                },
            },
            fontFamily: {
                popin: ['Poppins'],
                sans: ['Lexend', 'system-ui', 'sans-serif'],
                lexend: ['Lexend'],
            },
            fontSize: {
                '3.5xl': '2rem',
                '4.5xl': '2.5rem',
                '6.5xl': '4rem',
            },
            borderRadius: {
                xxl: '10px',
            },
            colors: {
                funded: {
                    50: '#DBB66B',
                    60: '#F6DBA4',
                    65: '#E3CB8F',
                    70: '#FFE3AB',
                    80: '#E0BE77',
                    90: '#E2C889',
                    100: '#5865F2',
                    150: '#161A1E',
                    200: '#BBC3CF',
                    250: '#D3D3D3',
                    300: '#8896AB',
                    350: '#333F51',
                    400: '#838383',
                    575: '#484131',
                    570: '#222222',
                    420: '#B9B9B9',
                    450: '#E5E5E5',
                    470: '#393835',
                    500: '#575757',
                    550: '#8896AB',
                    560: '#556987',
                    600: '#1C1C1C',
                    700: '#232323',
                    710: '#00000099',
                    720: '#212121',
                    750: '#B9B9B9',
                    800: '#D9D9D9',
                    900: '#2E2D2D',
                    1000: '#A9A9A9',
                    1100: '#828282',
                    1200: '#092541',
                    1300: '#EB5B4F',
                },
            },
            backgroundImage: {
                comingSoon: 'linear-gradient(90.85deg, #E2C889 0.36%, rgba(226, 200, 137, 0.2) 99.27%);',
                hoverFirstChild:
                    'linear-gradient(268.8deg, rgba(219, 182, 107, 0.3) -0.07%, rgba(219, 182, 107, 0) 97.95%);',
                hoverMiddleChild: 'linear-gradient(180deg, rgba(219, 182, 107, 0.3) 0%, rgba(219, 182, 107, 0) 100%);',
                hoverLastChild: 'linear-gradient(90deg, rgba(219, 182, 107, 0.3) 0.07%, rgba(219, 182, 107, 0) 100%);',
                brokerSection: "url('/broker_bg.png')",
                fontSize: {
                    '5xs': '40px',
                },
            },
        },
        plugins: [require('flowbite/plugin'), require('@tailwindcss/forms'), require('daisyui')],
    },
};

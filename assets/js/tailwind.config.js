tailwind.config = {
    theme: {
        extend: {
            colors: {
                'dark': '#1A1313',
                'yellow-bg': ' #FAF7F4',
                'primary': {
                    '50': '#e6f0e6',
                    '100': '#b0d0b2',
                    '300': '#549A5A',
                    '500': '#006808',
                    '800': '#003904',
                    '900': '#002C03',
                },
                'gray': {
                    '800': '#5f6468',
                }
            },
            keyframes: {
                pulse512: {
                    '0%': { 'box-shadow': '0 0 0 0 #006808' },
                    '70%': { 'box-shadow': '0 0 0 10px rgb(218 103 68 / 0%)' },
                    '100%': { 'box-shadow': '0 0 0 0 rgb(218 103 68 / 0%)' },
                }
            },
            animation: {
                pulse512: 'pulse512 1.5s infinite',
            }
        }
    }
}
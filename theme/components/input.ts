const Popover = {
    parts: [
        "field",
        "addon",
        "root"
    ],
    baseStyle: {
        field: {
            width: "507px",
            height: "57px",
            borderRadius: "12px",
            background: "white",
            _invalid: {
                borderColor: "supplementary.red"
            },
            _disabled: {
                bg: 'interactive.transparentWhite'
            }
        },
        addon: {
            border: "8px solid",
            _invalid: {
                borderColor: "supplementary.red"
            }
        }
    },
    sizes: {

    },
    variants: {

    },
    defaultProps: {}
}

export default Popover;
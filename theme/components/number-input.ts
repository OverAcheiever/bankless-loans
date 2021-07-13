const NumberInput = {
    parts: [
        "root",
        "field",
        "stepper",
        "stepperGroup"
    ],
    baseStyle: {
        root: {
            bg: "white",
            borderRadius: "12px",
        },
        field: ({ onDark }: {onDark?: boolean}) => ({
            bg: "white",
            border:  onDark ? 'none': '8px solid',
            borderRadius: "12px",
            _hover: {
                borderColor: "interactive.purple"
            },
            _focus: {
                borderColor: "interactive.purple"
            },
            _invalid: {
                borderColor: "supplementary.red"
            },
            _disabled: {
                bg: "interactive.transparentWhite"
            }
        })
    },
    sizes: {

    },
    variants: {

    },
    defaultProps: {}
}

export default NumberInput;
import className from "classnames";
function Button({ primary, secondery, succes, wearning, danger, rounded, outline, children, ...rest }) {
    const classes = className(' flex items-center px-3 py-1.5 border', {
        'border-blue-600 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white ': secondery,
        'border-green-500 bg-green-500 text-white': succes,
        'border-yellow-400 bg-yellow-400 text-white': wearning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white ': outline,
        'text-blue-500': outline && primary,
        'text-gray-500': outline && secondery,
        'text-green-500': outline && succes,
        'text-yellow-400': outline && wearning,
        'text-red-500': outline && danger,

    });
  

    return (
        <button className={classes}>
            {children}
        </button>
    )
};
Button.propTypes = {
    checkVariationValue: ({ primary, secondery, succes, wearning, danger }) => {
        const count = Number(!!primary)
            + Number(!!secondery)
            + Number(!!succes)
            + Number(!!wearning)
            + Number(!!danger);
        if (count > 1) {
            return new Error('Invalid props:only onw props can be true');

        }
    }
};
export default Button;

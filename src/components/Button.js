import className from "classnames";


function Button({
    children,
    primary,
    secondary,
    succes,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}){
    const classes=className(
        rest.className,
        'flex items-center px-3 py-1.5 border',
        {
            
        }
    )
}
import React from 'react';

const BSInputs = props => {

    const {name, label, type, onChange,className,value, placeholder, helperClassName,helperText,minLength,required} = props;

    return(
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                onChange={onChange}
                className={className?`form-control ${className}`:`form-control`} 
                type={ type?type:'text' }
                name={name}
                required={required}
                id={name}
                minLength={minLength}
                value={value}
                aria-describedby={ `${name}Helper`} 
                placeholder={placeholder}
            />
            <small id={ `${name}Helper`}  className={ (helperClassName)?`form-text ${helperClassName}`:`form-text text-muted`} >{helperText?helperText:''}</small>
      </div>
    );
}

export default BSInputs;


// const BSLamp = () => {

//     return(
//         <h1>
//             hi hi hi 
//         </h1>
//     );
// }

// export default BSLamp;
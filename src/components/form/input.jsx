

export function Input ({placeholder,value,onChange}) {
return <div>
    <Input
    type="text"
    classname="form-control"
    value={value}
    placeholder={placeholder}
    onchange={(e) => onchange(e.target.value)}
/>
</div>
    }
    




export default function Records () {
    function Addcategories () {
        fetch("http://localhost:4000/", {
            method: "POST",
            body: JSON.stringify (
                {name: selectedName},
                {icon: selectedIconi},
                {color: selectedColor}
            ),
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            } 
        })
    }
    return (
        <div>
     
        </div>
    )
}
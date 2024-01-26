// export default function Products(props)
export default function Products({productitems}){
    // console.log(props.productitems);
    console.table(productitems)

    return (
        <div>
            <h1> List of Products </h1>
            {
                productitems.map(function(item){
                    return(
                        <div style= {{border: "2px solid teal",margin:"10px", padding:"10px"}}>
                        <h1>{item.name}</h1>
                        <p>{item.price}</p>
                        </div>
                    )
                })
            }
         </div>
    )
}
$(function(){
    let productName =$('#productName')
    let productManufacturer =$('#productManufacturer')
    let productPrice =$('#productPrice')
    $('btnProductAdd').click()(function(){
        addProduct(
            productName.val(),product.productManufacturer.val(),productPrice.val(),
            function(addedProduct){
                window.alert("added"+addedProduct.name+"to database")
            }
        )
    })
})
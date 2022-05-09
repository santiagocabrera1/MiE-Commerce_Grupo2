const checkoutController = {
    getCheckout: (req,res) =>{
        res.status(501).render("./pages/notfound",{
            msg: "Estamos trabajando para implementar esta vista",
            status:501,
        });
    }
};

module.exports = checkoutController

    




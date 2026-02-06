function demoFunction(req,res){
    try {
        res.status(200).json({
            message:"Demo API end point has been hit,successfully!"
        })
    } catch (error) {
        res.status(500).json({
            error:true,
            message: error.message
        })
            
        
        
    }
}
function demoHealth(req,res){
    try {
        res.status(200).json({
            message:"Healthy server!"
        })
    } catch (error) {
        res.status(400).json({
            error:true,
            message:error.message
        })
        
    }
}
export {demoFunction , demoHealth};
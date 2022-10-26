const {DB} = require("../firebase/admin");

exports.service = async(req, res) => {
    const userref = DB.collection("users");
    try{
        userref.get().then(snapshot => {
            const data = snapshot.docs.map(doc => ({
                id:doc.id,
                ...doc.data()
            }))
            return res.json(data);
        })
    }catch(error){
        return res.json({error: error})
    }
}

exports.adduser = async(req, res) => {
    
    try{
        const data = await DB.collection("users").add(req.body);
        return res.json(data);
    } catch{
        return res.json({error: error})
    }
}
   
/**
 * EmailController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 module.exports = {

    send: async function (req, res) {
        if(!req.body.emailTo) return res.badRequest('Se esperaba el parametro emailTo');        
        if(!req.body.nameDama) return res.badRequest('Se esperaba el parametro nameDama');        
        if(!req.body.tipoRespuesta) return res.badRequest('Se esperaba el parametro tipoRespuesta');        

        const emailTo = req.body.emailTo;        
        const nameDama = req.body.nameDama; 
        const tipoRespuesta = req.body.tipoRespuesta
        

        try {
            await sails.helpers.sendTemplateEmail.with({
                to: emailTo,
                subject: 'Te respondio ' + nameDama,
                template: 'email-response',
                templateData: {                    
                    nameDama: nameDama,
                    tipoRespuesta: tipoRespuesta,                    
                }
            });
            return res.status(200).json({
                status: 'success',
                msg: 'El email se envió con éxito'
            })
        } catch (error) {
            console.log(error);
            return res.badRequest(error);
        }
    }
};


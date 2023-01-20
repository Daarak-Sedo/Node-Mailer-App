const userModel = require('../Models/queryModel');
const nodemailer = require('nodemailer');



//==========================================createQuery===============================================>
const createQuery = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody, req.body,"body")
        const { Name, Mobile, Email} = reqBody;


        if (!Name)  return res.status(400).send({ status: false, message: `fname is required.` });
        if (!Mobile)   return res.status(400).send({ status: false, message: `lname is required.` });
        if (!Email) return res.status(400).send({ status: false, message: `email is required.` });

          
let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
        // user: 'jitendra@metaversitytechnologies.com',
        //  pass: 'nztewtqybhcvfleq'
		
        user: 'bhuwan@metaversitytechnologies.com',
        pass: 'cbggkicxtihzfody'
        
	} 
});

let mailDetails = {
    // from: 'jitendra@metaversitytechnologies.com',
    // to: 'jmaurya07868@gmail.com',
    from: 'bhuwan@metaversitytechnologies.com',
    to: 'daraksedo895@gmail.com',
    subject: 'New Enquiry',
    text: `All Details for this Lead are below. Connect him on whatsApp asap:- \n Name: ${reqBody.Name} \n Email: ${reqBody.Email} \n Mobile: ${reqBody.Mobile} `,
};

mailTransporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log('Error Occurs');
	} else {
		console.log('Email sent successfully');
	}
});
     
       res.status(201).send({"data":reqBody})

    } catch (err) {
        console.log(err)

        res.status(500).send({ status: false, message: err });
    }
};



module.exports={createQuery}




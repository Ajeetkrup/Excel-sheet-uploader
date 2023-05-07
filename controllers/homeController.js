const Candidate = require('../models/candidate');

module.exports.home = (req, res) => {
    return res.render('index')
}


module.exports.read = async (req, res) => {
    try {
        // console.log(req.body);
        // console.log(req.files);
        const reader = require('xlsx');

        // console.log(req.files[0].path)
        const file = await reader.readFile(req.files[0].path);

        let data = []

        const sheets = file.SheetNames; //it's an array
        const async = require('async');
        for (let i = 0; i < sheets.length; i++) {
            const temp = await reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]); //temp = array of objectse

            async.eachSeries(temp, async (item) => {
                // console.log(item);
                const candidate = await Candidate.findOne({ email: item['Email'] });

                if (!candidate) {
                    // console.log(obj)
                    const dummy = new Candidate({
                            name: item['Name of the Candidate'],
                            email: item['Email'],
                            mobile: item['Mobile No.'],
                            dob: item['Date of Birth'],
                            workExp: item['Work Experience'],
                            resumeTitle: item['Resume Title'],
                            currLoc: item['Current Location'],
                            postalAdd: item['Postal Address'],
                            currEmp: item['Current Employer'],
                            currDes: item['Current Designation']
                        });
                    await dummy.save();
                }



            });
        }
        return res.json({ status: 'Success', msg: 'File Uploaded Successfully' });
    }
    catch (err) {
        console.log(err);
        return res.json({ status: 'Success', msg: 'File upload failed' });
    }
}
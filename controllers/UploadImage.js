// upload single file
module.exports.UploadSingle = async (req, res, next) => {
    let imageFile = req.files.file;
    var time = new Date()
        .toJSON()
        .slice(0, 19)
        .replace(/[-T:]/g, "");
    await imageFile.mv(
        `${__dirname}/../uploads/tmp/${time}-${imageFile.name}`,
        function (err) {
            if (err) {
                return res.status(500).send(err);
            }
            res.json({ file: `${time}-${imageFile.name}` });
        }
    );
};

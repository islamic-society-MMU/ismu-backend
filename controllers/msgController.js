const Message = require('../model/messages')

// POST a new message

const post_message = async(req, res) => {
    const { name, message } = req.body

    try {
        const msg = await Message.create({ name, message })
        res.send(msg)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    post_message
}
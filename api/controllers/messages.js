const venom = require("venom-bot");
const CONTACTS = require("../../contacts.json");
const MAIN = "5516997659374@c.us";

module.exports = async ({ models }) => {
    const client = await venom.create();
    await client.sendText(MAIN, "👋 Opa!");

    client.onMessage(async (message) => {
        console.log(message);

        if (message.type === "chat") {
            await models.messages.create({
                userName: message?.sender.name || message.notifyName,
                number: message.from,
                thumnail: "thumb",
                message: message.body,
            });
            // client.reply(message.from, message, message.id.toString()).then()
        }
    });

    return {
        get: async (req, resp) => {
            try {
                resp.json(await models.messages.find({}));
            } catch (error) {
                console.error(error);
                resp.status(500).json(error);
            }
        },
        saveName: async (req, resp) => {
            try {
                const bebeName = await models.bebe.findOne({ key: "bebe" });
                if (bebeName) {
                    resp.json(
                        await models.bebe.updateOne({
                            key: "bebe",
                            name: req.body.name,
                        })
                    );
                } else {
                    resp.json(
                        await models.bebe.create({
                            key: "bebe",
                            name: req.body.name,
                        })
                    );
                }
            } catch (error) {
                console.error(error);
                resp.status(500).json(error);
            }
        },
        dispatch: async (req, resp) => {
            try {
                const bebeName = await models.bebe.findOne({ key: "bebe" });
                if (!bebeName) {
                    return resp
                        .status(404)
                        .json({ message: "Nome não encontrado" });
                }

                for (const contact of CONTACTS) {
                    await client.sendText(contact, `👋 Opa 1! ${bebeName}`);
                }

                resp.json({ ok: true });
            } catch (error) {
                console.error(error);
                resp.status(500).json(error);
            }
        },
    };
};

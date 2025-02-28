import {model, Schema, Types} from 'mongoose';

export interface IHistory {
    chat_id: string,
    user_id: Types.ObjectId;
    user_msg: string,
    ai_msg: string,
}

const History = new Schema<IHistory>(
    {
        chat_id: {type: String, required: true},
        user_id: {type: Schema.Types.ObjectId, ref: "User", required: true},
        user_msg: {type: String, required: true},
        ai_msg: {type: String, required: true},
    },
    {
        timestamps: true,
    }
);


export default model<IHistory>('History', History);
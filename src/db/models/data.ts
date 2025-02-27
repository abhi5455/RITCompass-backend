import {model, Schema} from 'mongoose';
import {DataCategory} from "../../data/data.type";


const Data = new Schema<DataCategory>(
    {
        name: {type: String, required: true},
        keywords: [{type: String, required: true}],
        short_desc: {type: String, required: true},
        items: [
            {
                title: {type: String, required: true},
                description: {type: String, required: true},
                steps: [
                    {
                        title: {type: String, required: true},
                        description: {type: String, required: true},
                        responsible_authority: {type: String, required: true},
                        expected_time: {type: String},
                    }
                ],
                docs_needed: [
                    {
                        type: {type: String, required: true},
                        template: {type: String, required: true},
                        fields: [{type: String, required: true}],
                    }
                ],
                related_links: [{type: String, required: true}]
            }
        ]
    },
    {
        timestamps: true,
    }
);


export default model<DataCategory>('Data', Data);
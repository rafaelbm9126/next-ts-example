import * as React from 'react';
import { Form, Button, Result } from 'antd';
import axios from 'axios';

import PictureUploadUrl from './PictureUploadUrl';
import FileUpload from './FileUpload';
import MentionsItem from './MentionsItem';
import TextStandard from './TextStandard';
import TextAddonSelect from './TextAddonSelect';
import SelectItem from './SelectItem';
import DateTimeItem from './DateTimeItem';

import { FormModelComponent } from '../models/model';

import { layout, validateMessages, initialValues } from './config';

interface Props {
    formModel: FormModelComponent | null;
    survey   : string;
    success  : Function;
}

const send_form = (values: any, survey: string, success: Function) => {
    let send = {
        id_survey  : survey,
        id_informer: "",
        answers    : {
            ...values
        }
    };
    axios.post('/set_answers_form', send)
        .then(({ data }) => {
            console.log('Ok: ', data);
            success();
        })
        .catch((error) => {
            console.error(error);
        })
}

export const ConstructorForm: React.FunctionComponent<Props> = ({ formModel, survey, success }) => {
    
    if (formModel == null)
        return (<></>);

    return (
        <Form
            {...layout}
            initialValues={initialValues}
            className="formComp" onFinish={(values) => send_form(values, survey, success)}
            validateMessages={validateMessages}
        >
            <div className="header-form">
                <h1>{formModel.title}</h1>
                <small>create {formModel.created}</small>
                <br/>
                <p>{formModel.description}</p>
            </div>
            <div>
            {
                formModel.items.map((item) =>
                    (item.type == 'text') ?
                        <TextStandard
                            key={item.name}
                            item={item}
                            inputType="text"
                        />
                    : (item.type == 'email') ?
                        <TextStandard
                            key={item.name}
                            item={item}
                            rules={{type: 'email'}}
                            inputType="text"
                        />
                    : (item.type == 'range') ?
                        <TextStandard
                            key={item.name}
                            item={item}
                            rules={{
                                type: 'integer',
                                max: (item.maxlen as number),
                                min: (item.minlen as number)
                            }}
                            inputType="number"
                        />
                    : (item.type == 'text_long') ?
                        <TextStandard
                            key={item.name}
                            item={item}
                            inputType="area"
                        />
                    : (item.type == 'select_simple') ?
                        <SelectItem
                            key={item.name}
                            item={item}
                            multiple={false}
                        />
                    : (item.type == 'select_multiple') ?
                        <SelectItem
                            key={item.name}
                            item={item}
                            multiple={true}
                        />
                    : (item.type == 'phone') ?
                        <TextAddonSelect
                            key={item.name}
                            item={item}
                            rules={{
                                max: (item.maxlen as number),
                                min: (item.minlen as number)
                            }}
                            nameSelect="phone_options"
                        />
                    : (item.type == 'url') ?
                        <TextStandard
                            key={item.name}
                            item={item}
                            rules={{
                                type: 'url',
                                max: (item.maxlen as number),
                                min: (item.minlen as number)
                            }}
                            inputType="text"
                        />
                    : (item.type == 'file') ?
                        <FileUpload
                            key={item.name}
                            {...item}
                        />
                    : (item.type == 'picture') ?
                        <PictureUploadUrl
                            key={item.name}
                            {...item}
                        />
                    : (item.type == 'mentions') ?
                        <MentionsItem
                            key={item.name}
                            {...item}
                        />
                    : (item.type == 'date') ?
                        <DateTimeItem
                            key={item.name}
                            item={item}
                        />
                    : (item.type == 'time') ?
                        <DateTimeItem
                            key={item.name}
                            item={item}
                            onlyTime={true}
                        />
                    :
                        null
                )
            }
            </div>

            <Form.Item className="salt" wrapperCol={{ ...layout.wrapperCol, offset: 1 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

        </Form>
    );
}

export default ConstructorForm;

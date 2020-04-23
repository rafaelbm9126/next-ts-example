import * as React from 'react';
import { Form, Input, InputNumber } from 'antd';
import { ItemModelComponent } from '../models/model';
import { Rule } from 'rc-field-form/lib/interface';

interface Props {
    item     : ItemModelComponent;
    rules?   : Rule;
    inputType: 'text' | 'number' | 'area';
}

const TextStandard: React.FunctionComponent<Props> = ({item, rules, inputType}) => {
    return (
        <Form.Item
            className="salt"
            name={item.name}
            rules={[{ required: item.required, ...rules }]}
            label={item.label} >
            {
            (inputType == 'text') ?
                <Input placeholder={item.placeholder} />
            : (inputType == 'number') ?
                <InputNumber placeholder={item.placeholder} style={{ width: '100%' }} />
            :
                <Input.TextArea placeholder={item.placeholder} />
            }
        </Form.Item>
    );
}

export default TextStandard;

import * as React from 'react';
import { Form, Input, Select } from 'antd';
import { ItemModelComponent } from '../models/model';
import { Rule } from 'rc-field-form/lib/interface';

const { Option } = Select;

interface Props {
    item  : ItemModelComponent;
    rules?: Rule;
    nameSelect: string;
}

const TextAddonSelect: React.FunctionComponent<Props> = ({item, rules, nameSelect}) => {
    return (
        <Form.Item
            className="salt"
            name={item.name}
            rules={[{ required: item.required, ...rules }]}
            label={item.label} >

            <Input placeholder={item.placeholder} addonBefore={(
                <Form.Item name={nameSelect} noStyle>
                    <Select style={{ width: 70 }}>
                        <Option value="86">+86</Option>
                        <Option value="87">+87</Option>
                    </Select>
                </Form.Item>
            )} />

        </Form.Item>
    );
}

export default TextAddonSelect;

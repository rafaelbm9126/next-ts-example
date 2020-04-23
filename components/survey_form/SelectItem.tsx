import * as React from 'react';
import { Form, Select, Button, Input } from 'antd';
import { PlusOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import { v4 as uid } from 'uuid';
import axios from 'axios';
import { ItemModelComponent, OptionModelComponent } from '../models/model';
import { Rule } from 'rc-field-form/lib/interface';

const { Option } = Select;

interface Props {
    item    : ItemModelComponent;
    rules?  : Rule;
    multiple: boolean;
}

const SelectItem: React.FunctionComponent<Props> = ({item, rules, multiple}) => {
    let [open, setOpen] = React.useState(false);
    let [add, setAdd]   = React.useState('');
    let [save, setSave] = React.useState(false);
    let [act, setAct]   = React.useState<string | undefined>(undefined);
    let [opts, setOpts] = React.useState<Array<OptionModelComponent>>(item.options || []);
    let [flag, setFlag] = React.useState(true);
    if (item.field && flag) {
        axios.post("/get_data_form", { field: item.field })
            .then(({ data: { data } }) => {
                let aux: Array<OptionModelComponent> = [];
                for (let opt of data)
                    aux.push({ key: opt, value: opt, label: opt });
                setOpts(opts.concat(aux));
            });
        setFlag(false);
    }

    React.useEffect(() => {
        let addX = add.trim();
        if (save && addX.length > 0) {
            let aux: OptionModelComponent = { key: addX, value: addX, label: addX };
            setOpen(false);
            let exist = opts.filter(({ value }) =>
            addX == value
            );
            if (exist.length == 0) {
                setOpts([aux].concat(opts));
            }
            setAct(addX);
            setAdd('');
        }
        setSave(false);
    }, [save]);

    return (
        <Form.Item
            className="salt"
            name={item.name}
            rules={[{ required: item.required, ...rules }]}
            label={item.label} >
                <div>
                    <div className="concat-addons">
                    {
                        (multiple) ?
                            <Select
                                mode="multiple"
                                placeholder={item.placeholder}
                                style={{ width: '100%' }}
                            >
                                {
                                    opts.map((option) =>
                                        <Option key={uid()} value={option.value}>{option.label}</Option>
                                    )
                                }
                            </Select>
                        :
                            <Select
                                placeholder={item.placeholder}
                                style={{ width: '100%' }}
                                value={act}
                            >
                                {
                                    opts.map((option) =>
                                        <Option key={uid()} value={option.value}>{option.label}</Option>
                                    )
                                }
                            </Select>
                    }
                    {
                        (item.free) ?
                            <Button
                                className="second"
                                type="primary"
                                icon={<AppstoreAddOutlined />}
                                onClick={() => setOpen(!open)}
                            />
                        :
                            null
                    }
                    </div>
                    {
                        (open) ?
                            <div className="concat-add-item">
                                <Input
                                    placeholder="add new"
                                    className="add-item"
                                    value={add}
                                    size="small"
                                    onChange={(e) => setAdd(e.target.value)}
                                />
                                <Button
                                    className="second-add-item"
                                    type="primary"
                                    size="small"
                                    icon={<PlusOutlined />}
                                    onClick={() => setSave(true)}
                                />
                            </div>
                        :
                            null
                    }
                </div>
        </Form.Item>
    );
}

export default SelectItem;

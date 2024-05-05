import { Upload, Button, Form, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React from 'react';
import { FormStyles } from './style';

const { Option } = Select;

interface UploadStepProps {
    onNext: () => void;
    visible: boolean;
    onClose: () => void;
}

const UploadStep: React.FC<UploadStepProps> = ({
    onNext,
    visible,
    onClose,
}) => {
    const [form] = Form.useForm();
    const {styles} = FormStyles(); 
    interface MaxUploads {
        '1-bedroom': number;
        bachelor: number;
        '2-bedroom': number;
        [key: string]: number; // Index signature to allow indexing by string
    }
    
    const maxUploads: MaxUploads = {
        '1-bedroom': 3,
        'bachelor': 2,
        '2-bedroom': 4,
    };
    

    const getMaxUploads = (unitType: string) => maxUploads[unitType] || 0;

    const onFinish = (values: any) => {
        console.log('Unit Details:', values);
    };

    const validateUploads = (_: any, fileList: FileList) => {
        const unitType = form.getFieldValue('unitType') as string;
        const maxCount = getMaxUploads(unitType);
        if (fileList.length > maxCount) {
            return Promise.reject(`You can only upload up to ${maxCount} files for ${unitType}`);
        }
        return Promise.resolve();
    };

    return (
    <>
        <div className={styles.container}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
            {/* Unit Type */}
            <Form.Item name="unitType" label="Unit Type" rules={[{ required: true, message: 'Please select a unit type' }]}>
                <Select placeholder="Select unit type">
                    <Option value="1-bedroom">1 Bedroom</Option>
                    <Option value="bachelor">Bachelor</Option>
                    <Option value="2-bedroom">2 Bedroom</Option>
                </Select>
            </Form.Item>

            {/* Uploads */}
            <Form.Item name="uploads" label="Uploads" rules={[{ validator: validateUploads }]}>
                <Upload maxCount={getMaxUploads(form.getFieldValue('unitType') as string)}>
                    <Button icon={<UploadOutlined />}>Upload ID</Button>
                </Upload>
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </div></>
    );
};

export default UploadStep;

import { Pagination } from 'antd';
const onChange = (page, pageSize) => {
    console.log(page, pageSize);
    console.log(1111111);
};

export default function Paging() {
    return (
        <>
            <Pagination
                pageSize={8}
                showSizeChanger
                onChange={onChange}
                defaultCurrent={1}
                total={400}
            />
        </>
    )
}

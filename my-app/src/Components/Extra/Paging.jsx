import { Pagination } from 'antd';
const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
};

export default function Paging() {
    return (
        <>
            <Pagination
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                defaultCurrent={1}
                total={500}
            />
        </>
    )
}

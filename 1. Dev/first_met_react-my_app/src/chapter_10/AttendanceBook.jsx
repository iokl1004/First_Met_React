
const students = [
    {
        id : 1,
        name: "InJe",
    },
    {
        id : 2,
        name: "Steve",
    },
    {
        id : 3,
        name: "Bill",
    },
    {
        id : 4,
        name: "Jeff",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {/* 배열을 렌더링 하기 위해 map 함수를 사용! */}
            {students.map((student, i) => {
                return <li key={student.id}>{i}. {student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;
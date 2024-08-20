import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name : "장인기",
        comment : "안녕하세요, POP입니다."
    },
    {
        name : "유재석",
        comment : "무한!"
    },
    {
        name : "박명수",
        comment : "도전!!"
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment, i) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} index={i}/>
                );
            })}
        </div>
    );
}

export default CommentList;
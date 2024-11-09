// 互动 点赞关注
export interface InteractionLike {
    id?: number; 
    vid?: number;
    uid?: number;
    left: number;
    top: number;
    type: number;
    timeStart: number;
    timeEnd: number;
    className: string;
    isShow: boolean;
    isExpand?: boolean;
    
}
// 互动 外链视频
export interface InteractionLink {
    id?: number;
    vid?: number;
    uid?: number;
    left: number;
    top: number;
    link_url: string;
    link_content: string;
    timeStart: number;
    timeEnd: number;
    className: string;
    isShow: boolean;
    isClose: boolean;
    isCloseTime: number;
    closeProgress: number;
    isExpand?: boolean;
}
// 互动 投票
export interface InteractionVote {
    id?: number;
    vid?: number;
    uid?: number;
    left: number;
    top: number;
    question: string;
    timeStart: number;
    timeEnd: number;
    isCustom?: boolean;
    VoteOptions: VoteOption[];
    className: string;
    isShow: boolean;
    isClose: boolean;
    isCloseTime: number;
    closeProgress: number;
    isExpand?: boolean;
}
export interface VoteOption {
    id?: number;
    voteid?: number;
    option_text: string;
    anvote_count: number;
}

export interface InteractionCard {
    likeList: InteractionLike[]; // 点赞关注数据
    linkList: InteractionLink[]; // 视频链接数据
    voteList: InteractionVote[]; // 投票互动数据
}



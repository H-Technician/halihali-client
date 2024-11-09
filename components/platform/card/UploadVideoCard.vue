<template>
    <div class="card-content">
        <div class="card-content-warp">
            <div class="card-content-header">
                {{ title.toString().replace(/\.[^\.]+$/, "") }}
            </div>
            <div class="card-content-body">
                <div class="card-content-body-left">
                    <div id="playerWrap" class="video-box">
                        <VideoPlayer ref="videoPlayerRef" :videoUrl="url" protocol="mp4" :isShowDmBar="false"
                            :isUpload="true" :currentTimes="timeLineCurrentTime" :interactionCard="interactionCard"
                            @videocurRentTime="changCurRentTime" @videoDuration="changVideoDuration"
                            @updateCard="changUpdateCard" />
                    </div>
                    <div class="timeline">
                        <div class="timeline-header">
                            <div class="timeline-header-box">
                                <div class="timeline-header-box-slider">
                                    <IconsZoomOut class="icon" @click="reduce" />
                                    <div class="timeline-slider">
                                        <Slider :track="true" :max="3" :min="1" :value="timeline" @change="changeSlider"
                                            :tooltip="true" />
                                    </div>
                                    <IconsZoomIn class="icon" @click="add" />
                                </div>
                            </div>
                        </div>
                        <div class="timeline-body">
                            <div class="timeline-body-warp">
                                <div class="timeline-body-left">
                                    <div class="timeline-item-wrap">
                                        <div class="timeline-item-img">
                                            <img
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAABg1JREFUeAHtXF1oHFUU/u7sJtWYmNSWNipowFhQmzQ++NIgWoQiWkUfRBRBsG8qFvogIgoVDRQRwYKPiiAIUiT+I6viH0he1PrbUlPYlIobsVZtUxo3m+v5ZnY3u7OzOzvbO7Mzu3sgmZl779xz7jfnnPu39ygEJK212vw+JvUqboTGNRq4Uq6XaoVLFDAo9xdJWlqqTQHaClh9i8XVqrxYEP4rUFgS/meUxl9y/7ukLcj1sLLw1eIu/KCU5AQgeb852vSe3lZYwWNK4XYBaXNzb8WrlICzqDU+SKVx4I871PfNSOcL0Oi7+rp8AS+KNuxspsLklFGZvhT25u5UPzeSuS5AN3+m0z/+g31iMo8LOH2NKklunsqL+T0/MYx9n+9QK17t8ARo/EN98allHOw8rfGCgGkqs34d7pm/Tf3rLlEDEMH5exlfauht7sKd/Cz+6dBIP25yg1TVy9CsqDndBg4/vHQ8U2w7MahUhCqAbJ/Tcc64srl+93qng8FaubKJFXur7zrXIa81uvGdykvvdn2pdytrULEr79DeqjEk1bm6z8HCSbU1yBkE6kPVBbv7KZVWUxxM2hrEEXJ3w1Hb+hImFudWnD7UFgmW0ie6+PS1wE+3On+8Z1pSqTilUsqUeRGQPVuqEXnpqMazvyQVIplti5lZ9qzcQBvuvaK2Eq+02lLxTSE2FpcsTIg4ekG19rBOrzQTvCKrQ7CxZHFkLDKGCWNEbKhBowmTOzpxBRuLK4HRcUwWJ2JDDRpKltjRSSteddCSfwPRsUwYJ1lfT4sjqpreezWBA74npK9jtx20Z/rzLnnZg3LnNN48Duw/DOQDLaN7VBZSErEp7j405kBw3IPAxm/45xLoPVtYLtaDyZTMxfy3ZsIc8IVZt/9n8iuhrfJyh1/Rbs1vCiD6irAozLpNyOzroMmEjpS+ohUnzTe9qNJJe+XHJU1tmF010ofU6602vm2k+rbh1ZSJtU26GDDuAeTzEXoA9QDyQcAnu6dBUQHEbttNXmnuMnF/NqZBXgM+r7S4A+KWr6mBovslr+fKwSTzCY6T5lU6OWnGBorn2+TpjcBTsnU0OQysS3kvkQTlIXt+OLYEvJ4FXp4P+rZT3pgGtcbeeesGWfSdnQYs2a0zSdwRHR8EntkKrO/XeK6FPTpjPuh8GvakrDeZBsctz6PjwHALP82IBUBTI+7mmH9Oy+LyVjHfoBQLgIYi2sQfasGhxAKgRl91uaCRyWnw2g6KPUCvZYH754DpT2EDFTVIsQdoqfjr5exZB6gH5jSO87BBRBR7gNw4fJQDtos2vXAkGrNLHEAE7JwcXdl/xDG7j8U/hUmJBKgECM3uPvFPYZpdogEqAVUyuzcWzGtTRwBEoGh2nyyWIDN3laETD6P5766aY2m+Jo4zH7ka2GtvZZusX61ybFmQv8Rq0o5N4rAngasGzU50izAX0lLtilhuC9M4k18qeF2XXwjMTAC7LgsFGFsgYpOWA2VLsmkq7JJBleY0wM8bJgk2/H3QGeEhy1XxpEoIQjanGgCITZqng+VmrCY3Jgm3yPHhr08CD4qEYZqTV3OJDU0sJyYWW5ocUTi4vU3iybFy/kYx2yb2ZbarsnYcBQX9mYZgs2CJBtk/bolCwHo85ukFI6BjQfkINhYjEkQgW0MWb51omG0k89tTzg5HkMqIjVUM1xDCIL15UQ4cBd75LTwz+/W0xsPfNC8PSzJKg40NHzbM6ldkuvEQ79tJXLyflL9+Q+N6ujaa1Zz0gpyrBSP16sm71W57mGHqzFgwAeJduupIphPoQ2XiLXKU0qlMKfhJWZkZ6EMsLx+lGPHkZR8LFywcKgNknxOXQB+ljK69CgalM/PEoAwQHxgFhYE+eN+dpDIOBmutt5302iNgBzf5D18wlkVleqffNxXchCAw+gmjoHSXJqmMV+QX4lFlYkwgEaSJETlLr9RMZztuBlhSM2yrOyyOg4S0vnRT79oL0VUPGVd6L8ibC5B6jwxl4QoTOCbrSaP24WA5/yoqOSAjfG4GtCVMoPA+K3ZxmotdXOsSebJcsWg1TOD/z7Xdpgt792AAAAAASUVORK5CYII=">
                                        </div>
                                    </div>
                                </div>
                                <div class="timeline-body-right">
                                    <div class="timeline-body-slider">
                                        <div class="timeline-body-slider-lines" ref="timelineSliderRef" :style="`transform: translateX(${-timelineScrollLeft}px) translateZ(0px); 
                                            width: ${timelinesWidth}px;`" @mousedown="handleMouseDown"
                                            @mouseup="handleMouseUp">
                                            <div class="timeline-slider-line" ref="timelineSliderLineRef"
                                                :style="`width: ${timelinesWidth}px;`">
                                                <div class="timeline-slider" v-for="(item, index) in totalIntervalTimes"
                                                    :key="index" :style="`width: ${timelineWidth}px;`">
                                                    <div class="dot-time">{{ formatTime((item - 1) * intervalTime) }}
                                                    </div>
                                                </div>
                                                <div class="timeline-slider" :style="`width: ${lastTlWidth}px;`">
                                                    <div class="dot-time">{{ formatTime(totalIntervalTimes *
                                                        intervalTime) }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="timeline-line">
                                                <div class="timeline-box-container">
                                                    <div class="timeline-box editor-active"
                                                        v-for="(item, index) in interactionCard.likeList"
                                                        :key="index"
                                                        :style="`--width: ${timelineWidth}px; --left: ${timelineWidth * (item.timeStart / intervalTime)}px;`"
                                                        @mousedown="mouseDown($event, 'like', index)">
                                                        <div class="timeline-content-bar">
                                                            <span class="timeline-content">{{ getLikeType(item.type)
                                                                }}</span>
                                                            <div class="dragbar dragbar-left">||</div>
                                                            <div class="dragbar dragbar-right">||</div>
                                                        </div>
                                                    </div>
                                                    <div class="timeline-box editor-active"
                                                        v-for="(item, index) in interactionCard.linkList"
                                                        :key="index"
                                                        :style="`--width: ${timelineWidth}px; --left: ${timelineWidth * (item.timeStart / intervalTime)}px;`"
                                                        @mousedown="mouseDown($event, 'link', index)">
                                                        <div class="timeline-content-bar">
                                                            <span class="timeline-content">{{ item.link_content === '' ?
                                                                '关联视频' : item.link_content }}</span>
                                                            <div class="dragbar dragbar-left">||</div>
                                                            <div class="dragbar dragbar-right">||</div>
                                                        </div>
                                                    </div>
                                                    <div class="timeline-box editor-active"
                                                        v-for="(item, index) in interactionCard.voteList"
                                                        :key="index"
                                                        :style="`--width: ${timelineWidth}px; --left: ${timelineWidth * (item.timeStart / intervalTime)}px;`"
                                                        @mousedown="mouseDown($event, 'vote', index)">
                                                        <div class="timeline-content-bar">
                                                            <span class="timeline-content">弹幕投票</span>
                                                            <div class="dragbar dragbar-left">||</div>
                                                            <div class="dragbar dragbar-right">||</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bscroll-horizontal-scrollbar">
                                            <div class="bscroll-indicator" :style="`width: ${scrollbarWidth}px; 
                                            transform: translateX(${scrollbarTr}px) translateZ(0px); 
                                            transition-duration: ${isUserScrollbar ? '0' : '200'}ms;`"
                                                @mousedown="startScrollDrag($event)"
                                                @touchstart="startScrollDrag($event, 'touch')"></div>
                                        </div>
                                    </div>
                                    <div class="timeline-pointer-wrap">
                                        <div class="slider-dot" :style="`transform: translateX(${sliderDotLeft}px) translateZ(0px); 
                                            transition-duration: ${isUserInteracting ? '0' : '200'}ms;`"
                                            @mousedown.prevent="startDrag($event)"
                                            @touchstart="startDrag($event, 'touch')">
                                            <IconsPlayTimeLineDot class="dot" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-content-body-right">
                    <div class="card-content-body-right-warp">
                        <div class="editor-right-tab">
                            <div class="editor-right-tab-item" @click="selectEditorTab(index)"
                                :class="editorTabActive === index ? 'is_active' : ''" v-for="(item, index) in editorTab"
                                :key="item.name">
                                <div class="editor-icon">
                                    <img :src="item.icon" :alt="item.name">
                                </div>
                                <span>{{ item.name }}</span>
                            </div>
                        </div>
                        <div class="editor-right-add" @click="addCard(editorTabActive)">
                            <IconsPlus class="icon-plus" />{{ `添加${editorTab[editorTabActive].name}` }}
                        </div>
                        <div class="editor-right-list-item" v-if="editorTabActive === 0"
                            v-for="(item, index) in interactionCard.likeList"
                            :key="index">
                            <div class="editor-right-card" :class="item.isExpand ? 'editor-unfold' : ''">
                                <div class="editor-right-card-head">
                                    <div class="editor-right-active"
                                        :style="item.timeStart <= videoCurRentTime && videoCurRentTime <= item.timeEnd ? 'background: var(--brand_blue);' : ''">
                                    </div>
                                    <div class="editor-right-text">{{ getLikeType(item.type) }}</div>
                                    <div class="editor-right-delete">
                                        <Popconfirm :arrow="false"
                                            :popconfirmStyle="{ width: '160px', transform: 'translateY(150%)' }"
                                            description="确定要删除吗？" @ok="deleteCard('like', index)">
                                            <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="editor-right-delete-svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M15.125 4.583a2.292 2.292 0 00-2.292-2.291H9.167a2.292 2.292 0 00-2.292 2.291v.459H2.521a.688.688 0 000 1.375h16.958a.687.687 0 100-1.375h-4.354v-.459zm-1.375.459h-5.5v-.459c0-.506.41-.916.917-.916h3.666c.507 0 .917.41.917.916v.459zM5.042 8.479a.688.688 0 00-1.375 0v7.475c0 1.833 1.362 3.409 3.224 3.564 1.198.1 2.673.19 4.109.19s2.911-.09 4.11-.19c1.861-.155 3.223-1.731 3.223-3.564V8.48a.688.688 0 00-1.375 0v7.475c0 1.154-.85 2.1-1.963 2.194-1.177.098-2.61.185-3.995.185-1.384 0-2.818-.087-3.995-.185-1.114-.093-1.963-1.04-1.963-2.194V8.48zm3.666 1.146c.38 0 .688.308.688.688v3.208a.688.688 0 01-1.375 0v-3.209c0-.38.308-.687.687-.687zm5.271.688a.687.687 0 00-1.375 0v3.208a.687.687 0 101.375 0v-3.209z"
                                                    fill="#61666D">
                                                </path>
                                            </svg>
                                        </Popconfirm>
                                    </div>
                                    <div class="editor-right-time">{{ formatSeconds(item.timeStart, '') }}</div>
                                    <div class="editor-right-time editor-right-time-next">- {{
                                        formatSeconds(item.timeEnd, '') }}</div>
                                    <div class="editor-right-unfold" @click="hideEdite('like', index)"></div>
                                </div>
                                <div class="editor-right-card-body editor-unfold">
                                    <div class="editor-right-card-input-title">组件样式</div>
                                    <div class="editor-right-card-switch">
                                        <Radio :options="options"
                                            v-model:value="interactionCard.likeList[index].type" />
                                    </div>
                                    <div class="editor-right-card-input editor-right-card-input-follow">
                                        <div class="editor-right-card-input-title">起始时间</div>
                                        <div class="editor-right-card-input-item editor-right-time">
                                            <input type="text" :value="formatSeconds(item.timeStart, 'hours')"
                                                maxlength="2" @blur="handleBlur($event, 'like', 'hours', index)">
                                            <span>:</span>
                                            <input type="text" :value="formatSeconds(item.timeStart, 'minutes')"
                                                maxlength="2" @blur="handleBlur($event, 'like', 'minutes', index)">
                                            <span>:</span>
                                            <input type="text" :value="formatSeconds(item.timeStart, 'secs')"
                                                maxlength="2" @blur="handleBlur($event, 'like', 'secs', index)">
                                        </div>
                                    </div>
                                    <div class="editor-right-card-checkbox">
                                        <input type="checkbox" class="checkbox">
                                        <span>新投稿自动添加</span>
                                    </div>
                                    <div class="editor-right-card-follow-showTime">
                                        稿件时长不足时，一律在倒数10秒钟
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="editor-right-list-item" v-if="editorTabActive === 1"
                            v-for="(item, index) in interactionCard.linkList"
                            :key="index">
                            <div class="editor-right-card" :class="item.isExpand ? 'editor-unfold' : ''">
                                <div class="editor-right-card-head">
                                    <div class="editor-right-active"
                                        :style="item.timeStart <= videoCurRentTime && videoCurRentTime <= item.timeEnd ? 'background: rgb(13, 193, 180);' : ''">
                                    </div>
                                    <div class="editor-right-text">{{ item.link_content === '' ? '关联视频' :
                                        item.link_content }}</div>
                                    <div class="editor-right-delete">
                                        <Popconfirm :arrow="false"
                                            :popconfirmStyle="{ width: '160px', transform: 'translateY(150%)' }"
                                            description="确定要删除吗？" @ok="deleteCard('link', index)">
                                            <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="editor-right-delete-svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M15.125 4.583a2.292 2.292 0 00-2.292-2.291H9.167a2.292 2.292 0 00-2.292 2.291v.459H2.521a.688.688 0 000 1.375h16.958a.687.687 0 100-1.375h-4.354v-.459zm-1.375.459h-5.5v-.459c0-.506.41-.916.917-.916h3.666c.507 0 .917.41.917.916v.459zM5.042 8.479a.688.688 0 00-1.375 0v7.475c0 1.833 1.362 3.409 3.224 3.564 1.198.1 2.673.19 4.109.19s2.911-.09 4.11-.19c1.861-.155 3.223-1.731 3.223-3.564V8.48a.688.688 0 00-1.375 0v7.475c0 1.154-.85 2.1-1.963 2.194-1.177.098-2.61.185-3.995.185-1.384 0-2.818-.087-3.995-.185-1.114-.093-1.963-1.04-1.963-2.194V8.48zm3.666 1.146c.38 0 .688.308.688.688v3.208a.688.688 0 01-1.375 0v-3.209c0-.38.308-.687.687-.687zm5.271.688a.687.687 0 00-1.375 0v3.208a.687.687 0 101.375 0v-3.209z"
                                                    fill="#61666D">
                                                </path>
                                            </svg>
                                        </Popconfirm>
                                    </div>
                                    <div class="editor-right-time">{{ formatSeconds(item.timeStart, '') }}</div>
                                    <div class="editor-right-time editor-right-time-next">- {{
                                        formatSeconds(item.timeEnd, '') }}</div>
                                    <div class="editor-right-unfold" @click="hideEdite('link', index)"></div>
                                </div>
                                <div class="editor-right-card-body editor-unfold">
                                    <div class="editor-right-card-input editor-right-card-input-follow">
                                        <div class="editor-right-card-input-title">起始时间</div>
                                        <div class="editor-right-card-input-item editor-right-time">
                                            <input type="text" :value="formatSeconds(item.timeStart, 'hours')"
                                                maxlength="2" @blur="handleBlur($event, 'link', 'hours', index)">
                                            <span>:</span>
                                            <input type="text" :value="formatSeconds(item.timeStart, 'minutes')"
                                                maxlength="2" @blur="handleBlur($event, 'link', 'minutes', index)">
                                            <span>:</span>
                                            <input type="text" :value="formatSeconds(item.timeStart, 'secs')"
                                                maxlength="2" @blur="handleBlur($event, 'link', 'secs', index)">
                                        </div>
                                    </div>
                                    <div class="editor-right-card-input">
                                        <div class="editor-right-card-input-title">
                                            关联视频id/链接
                                        </div>
                                        <div class="editor-right-card-input-item">
                                            <input type="text" v-model="interactionCard.linkList[index].link_url"
                                                placeholder="支持关联本人投稿或开放的番剧">
                                        </div>
                                    </div>
                                    <div class="editor-right-card-input">
                                        <div class="editor-right-card-input-title">
                                            描述文案
                                        </div>
                                        <div class="editor-right-card-input-item">
                                            <input type="text" v-model="interactionCard.linkList[index].link_content"
                                                placeholder="输入描述文案">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="editor-right-list-item" v-if="editorTabActive === 2"
                            v-for="(item, index) in interactionCard.voteList"
                            :key="index">
                            <div class="editor-right-card" :class="item.isExpand ? 'editor-unfold' : ''">
                                <div class="editor-right-card-head">
                                    <div class="editor-right-active"
                                        :style="item.timeStart <= videoCurRentTime && videoCurRentTime <= item.timeEnd ? 'background: rgb(13, 193, 180);' : ''">
                                    </div>
                                    <div class="editor-right-text">投票弹幕</div>
                                    <div class="editor-right-delete">
                                        <Popconfirm :arrow="false"
                                            :popconfirmStyle="{ width: '160px', transform: 'translateY(150%)' }"
                                            description="确定要删除吗？" @ok="deleteCard('vote', index)">
                                            <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="editor-right-delete-svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M15.125 4.583a2.292 2.292 0 00-2.292-2.291H9.167a2.292 2.292 0 00-2.292 2.291v.459H2.521a.688.688 0 000 1.375h16.958a.687.687 0 100-1.375h-4.354v-.459zm-1.375.459h-5.5v-.459c0-.506.41-.916.917-.916h3.666c.507 0 .917.41.917.916v.459zM5.042 8.479a.688.688 0 00-1.375 0v7.475c0 1.833 1.362 3.409 3.224 3.564 1.198.1 2.673.19 4.109.19s2.911-.09 4.11-.19c1.861-.155 3.223-1.731 3.223-3.564V8.48a.688.688 0 00-1.375 0v7.475c0 1.154-.85 2.1-1.963 2.194-1.177.098-2.61.185-3.995.185-1.384 0-2.818-.087-3.995-.185-1.114-.093-1.963-1.04-1.963-2.194V8.48zm3.666 1.146c.38 0 .688.308.688.688v3.208a.688.688 0 01-1.375 0v-3.209c0-.38.308-.687.687-.687zm5.271.688a.687.687 0 00-1.375 0v3.208a.687.687 0 101.375 0v-3.209z"
                                                    fill="#61666D">
                                                </path>
                                            </svg>
                                        </Popconfirm>
                                    </div>
                                    <div class="editor-right-time">{{ formatSeconds(item.timeStart, '') }}</div>
                                    <div class="editor-right-time editor-right-time-next">- {{
                                        formatSeconds(item.timeEnd, '') }}</div>
                                    <div class="editor-right-unfold" @click="hideEdite('vote', index)"></div>
                                </div>
                                <div class="editor-right-card-body editor-unfold">
                                    <div class="editor-right-card-input editor-right-card-input-follow">
                                        <div class="editor-right-card-input-title">起始时间</div>
                                        <div class="editor-right-card-input-item editor-right-time">
                                            <input type="text" :value="formatSeconds(item.timeStart, 'hours')"
                                                maxlength="2" @blur="handleBlur($event, 'vote', 'hours', index)">
                                            <span>:</span>
                                            <input type="text" :value="formatSeconds(item.timeStart, 'minutes')"
                                                maxlength="2" @blur="handleBlur($event, 'vote', 'minutes', index)">
                                            <span>:</span>
                                            <input type="text" :value="formatSeconds(item.timeStart, 'secs')"
                                                maxlength="2" @blur="handleBlur($event, 'vote', 'secs', index)">
                                        </div>
                                    </div>
                                    <div class="editor-right-card-input">
                                        <div class="editor-right-card-input-title">
                                            问题
                                        </div>
                                        <div class="editor-right-card-input-item">
                                            <input type="text" maxlength="12"
                                                v-model="interactionCard.voteList[index].question" placeholder="请输入问题">
                                            <span class="editor-right-card-input-item-num">{{ item.question.length
                                                }}/12</span>
                                        </div>
                                    </div>
                                    <div class="editor-right-card-input"
                                        v-for="(voteItem, vo_index) in item.VoteOptions"
                                        :key="vo_index">
                                        <div class="editor-right-card-input-title">
                                            选项{{ vo_index + 1 }}
                                        </div>
                                        <div class="editor-right-card-input-item">
                                            <input type="text" maxlength="6"
                                                v-model="interactionCard.voteList[index].VoteOptions[vo_index].option_text"
                                                :placeholder="`弹幕输入${vo_index + 1}代表答案`"
                                                :disabled="item.VoteOptions.length > 2 && item.VoteOptions.length === vo_index + 1 && item.isCustom ? true : false">
                                            <span class="editor-right-card-input-item-num">{{
                                                voteItem.option_text.length }}/6</span>
                                            <div class="editor-right-card-input-item-delete" v-if="vo_index >= 2"
                                                @click="removeVoteItem(index, vo_index)">
                                                <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    class="editor-right-card-input-item-delete-svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M15.125 4.583a2.292 2.292 0 00-2.292-2.291H9.167a2.292 2.292 0 00-2.292 2.291v.459H2.521a.688.688 0 000 1.375h16.958a.687.687 0 100-1.375h-4.354v-.459zm-1.375.459h-5.5v-.459c0-.506.41-.916.917-.916h3.666c.507 0 .917.41.917.916v.459zM5.042 8.479a.688.688 0 00-1.375 0v7.475c0 1.833 1.362 3.409 3.224 3.564 1.198.1 2.673.19 4.109.19s2.911-.09 4.11-.19c1.861-.155 3.223-1.731 3.223-3.564V8.48a.688.688 0 00-1.375 0v7.475c0 1.154-.85 2.1-1.963 2.194-1.177.098-2.61.185-3.995.185-1.384 0-2.818-.087-3.995-.185-1.114-.093-1.963-1.04-1.963-2.194V8.48zm3.666 1.146c.38 0 .688.308.688.688v3.208a.688.688 0 01-1.375 0v-3.209c0-.38.308-.687.687-.687zm5.271.688a.687.687 0 00-1.375 0v3.208a.687.687 0 101.375 0v-3.209z"
                                                        fill="#61666D">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="editor-right-card-checkbox" @click="addVoteItem(index)"
                                        v-if="item.VoteOptions.length < 4">
                                        <span class="editor-right-card-checkbox-icon">
                                            <IconsPlus />
                                        </span>
                                        <span>添加选项({{ item.VoteOptions.length }}/4)</span>
                                    </div>
                                    <div class="editor-right-card-checkbox" v-if="item.VoteOptions.length > 2"
                                        @click="handleCheckboxClick(index, item.VoteOptions.length - 1)">
                                        <input type="checkbox" class="checkbox" :checked="item.isCustom">
                                        <span>将最后一个选项设为自定义</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="editor-right-btn" style="display: none;">
                            <Button type="primary" size="middle">提交</Button>
                            <Button type="default" size="middle">取消</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Interaction from '@/assets/img/platform/interaction.png'
import Association from '@/assets/img/platform/association.png'
import Danmu from '@/assets/img/platform/danmu.png'
import VideoPlayer from '@/components/videoplayer/Player.vue'
import Popconfirm from '@/components/popconfirm/hl-Popconfirm.vue';
import type { Radio } from '@/types/radio';
import type { InteractionLike, InteractionLink, InteractionVote, InteractionCard, VoteOption } from '@/types/interaction';
import Message from '@/components/message/Message';
const timelineSliderRef = ref<HTMLDivElement | null>(null);// 时间线元素
const timelineSliderLineRef = ref<HTMLDivElement | null>(null);// 时间线元素
const videoPlayerRef = ref<InstanceType<typeof VideoPlayer> | null>(null);
const sliderDotLeft = ref(0); // 初始位置，可以根据需要调整
const url = ref();
const title = ref('');
const videoDuration = ref(0);
const intervalTime = ref(5);
const totalIntervalTimes = ref(0);
const timelineWidth = ref(100);
const timeLineCurrentTime = ref(0);
const isUserInteracting = ref(false);
const isUserScrollbar = ref(false);
const editorTabActive = ref<number>(0);
const timelineScrollLeft = ref<number>(0);
const timelinesWidth = ref<number>(0);
const lastTlWidth = ref<number>(0);
const scrollbarTr = ref<number>(0);
const scrollbarWidth = ref(0);
const videoCurRentTime = ref(0);
const maxStartTime = ref(0);
let startX = 0;
let startScrollX = 0;
let lastSliderDotLeft = 0;
let timelineScrollPro = 0;
const timeline = ref(3);
const props = defineProps({
    file: {
        type: File,
        default: ''
    }
});
interface TabItem {
    id: number;
    name: string;
    icon: string;
}
// 定义 EditorTab 数组的类型
type EditorTab = TabItem[];
const editorTab: EditorTab = [
    { id: 0, name: '互动引导', icon: Interaction },
    { id: 1, name: '关联视频', icon: Association },
    { id: 2, name: '投票弹幕', icon: Danmu },
];

const options = ref<Radio[]>([
    {
        label: '三连+关注',
        value: 1
    },
    {
        label: '仅三连',
        value: 2
    },
    {
        label: '仅关注',
        value: 3
    }
]);

const interactionCard = reactive<InteractionCard>({
    likeList: [],
    linkList: [],
    voteList: [],
});
const hideEdite = (type: string, index: number) => {

    switch (type) {
        case 'like':
            interactionCard.likeList[index].isExpand = !interactionCard.likeList[index].isExpand;
            break;
        case 'link':
            interactionCard.linkList[index].isExpand = !interactionCard.linkList[index].isExpand;
            break;
        case 'vote':
            interactionCard.voteList[index].isExpand = !interactionCard.voteList[index].isExpand;
            break;
    };
}

const changUpdateCard = (type: string, index: number) => {
    if (videoPlayerRef.value) {
        switch (type) {
            case 'like':
                const newLikeList = videoPlayerRef.value.getLikeCard(index);
                if (newLikeList) {
                    interactionCard.likeList[index] = newLikeList;
                }
                break;
            case 'link':
                const newLinkList = videoPlayerRef.value.getLinkCard(index);
                if (newLinkList) {
                    interactionCard.linkList[index] = newLinkList;
                }
                break;
            case 'vote':
                const newVoteList = videoPlayerRef.value.getVoteCard(index);
                if (newVoteList) {
                    interactionCard.voteList[index] = newVoteList;
                }
                break;
        };
    }
}
const getLikeType = (type: number): string => {
    if (type === 1) {
        return '关注&三连';
    } else if (type === 2) {
        return '三连引导';
    } else if (type === 3) {
        return '关注引导';
    } else {
        return '';
    }
}
const changeSlider = (value: number) => {
    timeline.value = value;
}
// 缩小视频时间轴
const reduce = () => {
    if (timeline.value <= 1) return;
    timeline.value -= 1;
}
const handleBlur = (event: FocusEvent, type: string, timeType: string, index: number) => {
    const target = event.target as HTMLInputElement;
    const oldTime = interactionCard.likeList[index].timeStart;
    if (type === 'like') {
        switch (timeType) {
            case 'hours':
                const hours = strToNumber(target.value);
                const maxHours = getSeconds(maxStartTime.value, 'hours');
                if (0 <= hours && hours <= maxHours) {
                    const oldHours = getSeconds(oldTime, 'hours');
                    interactionCard.likeList[index].timeStart = (oldTime - (oldHours * 3600)) + (hours * 3600);
                    interactionCard.likeList[index].timeEnd = (oldTime - (oldHours * 3600)) + (hours * 3600) + 5;
                } else {
                    interactionCard.likeList[index].timeStart = oldTime + 3600;
                    interactionCard.likeList[index].timeStart = oldTime;
                }
                break;
            case 'minutes':
                const minutes = strToNumber(target.value);
                const maxMinutes = getSeconds(maxStartTime.value, 'minutes');
                if (0 <= minutes && minutes <= maxMinutes) {
                    const oldMinutes = getSeconds(oldTime, 'minutes');
                    interactionCard.likeList[index].timeStart = (oldTime - (oldMinutes * 60)) + (minutes * 60);
                    interactionCard.likeList[index].timeEnd = (oldTime - (oldMinutes * 60)) + (minutes * 60) + 5;
                } else {
                    interactionCard.likeList[index].timeStart = oldTime + 60;
                    interactionCard.likeList[index].timeStart = oldTime;
                }
                break;
            case 'secs':
                const secs = strToNumber(target.value);
                const maxSecs = getSeconds(maxStartTime.value, 'secs');
                if (0 <= secs && secs <= maxSecs) {
                    const oldSecs = getSeconds(oldTime, 'secs');
                    interactionCard.likeList[index].timeStart = oldTime - oldSecs + secs;
                    interactionCard.likeList[index].timeEnd = oldTime - oldSecs + secs + 5;
                } else {
                    interactionCard.likeList[index].timeStart = oldTime + 1;
                    interactionCard.likeList[index].timeStart = oldTime;
                }
                break;
        }
    } else if (type === 'link') {
        switch (timeType) {
            case 'hours':
                const hours = strToNumber(target.value);
                const maxHours = getSeconds(maxStartTime.value, 'hours');
                if (0 <= hours && hours <= maxHours) {
                    const oldHours = getSeconds(oldTime, 'hours');
                    interactionCard.linkList[index].timeStart = (oldTime - (oldHours * 3600)) + (hours * 3600);
                    interactionCard.linkList[index].timeEnd = (oldTime - (oldHours * 3600)) + (hours * 3600) + 5;
                } else {
                    interactionCard.linkList[index].timeStart = oldTime + 3600;
                    interactionCard.linkList[index].timeStart = oldTime;
                }
                break;
            case 'minutes':
                const minutes = strToNumber(target.value);
                const maxMinutes = getSeconds(maxStartTime.value, 'minutes');
                if (0 <= minutes && minutes <= maxMinutes) {
                    const oldMinutes = getSeconds(oldTime, 'minutes');
                    interactionCard.linkList[index].timeStart = (oldTime - (oldMinutes * 60)) + (minutes * 60);
                    interactionCard.linkList[index].timeEnd = (oldTime - (oldMinutes * 60)) + (minutes * 60) + 5;
                } else {
                    interactionCard.linkList[index].timeStart = oldTime + 60;
                    interactionCard.linkList[index].timeStart = oldTime;
                }
                break;
            case 'secs':
                const secs = strToNumber(target.value);
                const maxSecs = getSeconds(maxStartTime.value, 'secs');
                if (0 <= secs && secs <= maxSecs) {
                    const oldSecs = getSeconds(oldTime, 'secs');
                    interactionCard.linkList[index].timeStart = oldTime - oldSecs + secs;
                    interactionCard.linkList[index].timeEnd = oldTime - oldSecs + secs + 5;
                } else {
                    interactionCard.linkList[index].timeStart = oldTime + 1;
                    interactionCard.linkList[index].timeStart = oldTime;
                }
                break;
        }
    } else if (type === 'vote') {
        switch (timeType) {
            case 'hours':
                const hours = strToNumber(target.value);
                const maxHours = getSeconds(maxStartTime.value, 'hours');
                if (0 <= hours && hours <= maxHours) {
                    const oldHours = getSeconds(oldTime, 'hours');
                    interactionCard.voteList[index].timeStart = (oldTime - (oldHours * 3600)) + (hours * 3600);
                    interactionCard.voteList[index].timeEnd = (oldTime - (oldHours * 3600)) + (hours * 3600) + 5;
                } else {
                    interactionCard.voteList[index].timeStart = oldTime + 3600;
                    interactionCard.voteList[index].timeStart = oldTime;
                }
                break;
            case 'minutes':
                const minutes = strToNumber(target.value);
                const maxMinutes = getSeconds(maxStartTime.value, 'minutes');
                if (0 <= minutes && minutes <= maxMinutes) {
                    const oldMinutes = getSeconds(oldTime, 'minutes');
                    interactionCard.voteList[index].timeStart = (oldTime - (oldMinutes * 60)) + (minutes * 60);
                    interactionCard.voteList[index].timeEnd = (oldTime - (oldMinutes * 60)) + (minutes * 60) + 5;
                } else {
                    interactionCard.voteList[index].timeStart = oldTime + 60;
                    interactionCard.voteList[index].timeStart = oldTime;
                }
                break;
            case 'secs':
                const secs = strToNumber(target.value);
                const maxSecs = getSeconds(maxStartTime.value, 'secs');
                if (0 <= secs && secs <= maxSecs) {
                    const oldSecs = getSeconds(oldTime, 'secs');
                    interactionCard.voteList[index].timeStart = oldTime - oldSecs + secs;
                    interactionCard.voteList[index].timeEnd = oldTime - oldSecs + secs + 5;
                } else {
                    interactionCard.voteList[index].timeStart = oldTime + 1;
                    interactionCard.voteList[index].timeStart = oldTime;
                }
                break;
        }
    }
}

// 将字符串转换成number数字
const strToNumber = (srt: string): number => {
    const parts = srt.split(' ').filter(part => part.trim() !== '');
    return parseInt(parts[0], 10);
}
const selectEditorTab = (index: number) => {
    editorTabActive.value = index;
}
// 放大视频时间轴
const add = () => {
    if (timeline.value >= 3) return;
    timeline.value += 1;
}
const addVoteItem = (index: number) => {
    let newVoteItem: VoteOption;
    if (interactionCard.voteList[index].VoteOptions[interactionCard.voteList[index].VoteOptions.length - 1].option_text === '其他，请补充') {
        interactionCard.voteList[index].VoteOptions[interactionCard.voteList[index].VoteOptions.length - 1].option_text = "";
        newVoteItem = {
            id: 0,
            voteid: 0,
            option_text: '其他，请补充',
            anvote_count: 0,
        }
        interactionCard.voteList[index].VoteOptions.push(newVoteItem);
        return;
    }
    newVoteItem = {
        id: 0,
        voteid: 0,
        option_text: '',
        anvote_count: 0,
    }
    interactionCard.voteList[index].VoteOptions.push(newVoteItem);
}
const removeVoteItem = (index: number, vo_index: number) => {
    if (interactionCard.voteList[index].VoteOptions[vo_index].option_text === '其他，请补充' && vo_index > 2) {
        interactionCard.voteList[index].VoteOptions.splice(vo_index, 1);
        interactionCard.voteList[index].VoteOptions[vo_index - 1].option_text = '其他，请补充';
        return;
    }
    interactionCard.voteList[index].VoteOptions.splice(vo_index, 1);
}
const handleCheckboxClick = (index: number, vo_index: number) => {
    interactionCard.voteList[index].isCustom = !interactionCard.voteList[index].isCustom;
    if (interactionCard.voteList[index].isCustom) {
        interactionCard.voteList[index].VoteOptions[vo_index].option_text = "其他，请补充";
    } else {
        interactionCard.voteList[index].VoteOptions[vo_index].option_text = "";
    }
}
const startDrag = (e: MouseEvent | TouchEvent, eventType?: string) => {
    e.preventDefault();
    startX = eventType === 'touch' ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
    document.addEventListener('mousemove', dragging);
    document.addEventListener('mouseup', stopDrag);
    isUserInteracting.value = true;
}
const dragging = (e: MouseEvent | TouchEvent, eventType?: string) => {
    e.preventDefault();
    if (!timelineSliderRef.value) return;
    const newX = eventType === 'touch' ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
    const newPosition = Math.max(0, Math.min(620,
        (newX - startX) + sliderDotLeft.value
    ));
    startX = newX;
    if (newPosition > sliderDotLeft.value) {
        timeLineCurrentTime.value = getVideoCurTi() + ((620 / timelinesWidth.value * videoDuration.value) * (newPosition - sliderDotLeft.value) / 620);
    } else if (newPosition < sliderDotLeft.value) {
        timeLineCurrentTime.value = getVideoCurTi() - ((620 / timelinesWidth.value * videoDuration.value) * (sliderDotLeft.value - newPosition) / 620);
    }
    sliderDotLeft.value = newPosition;
    isUserInteracting.value = true;

}

const stopDrag = async () => {
    document.removeEventListener('mousemove', dragging);
    document.removeEventListener('mouseup', stopDrag);
    isUserInteracting.value = false;
}
const startScrollDrag = (e: MouseEvent | TouchEvent, eventType?: string) => {
    e.preventDefault();
    startScrollX = eventType === 'touch' ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
    document.addEventListener('mousemove', scrollDragging);
    document.addEventListener('mouseup', stopScrollDrag);
    isUserScrollbar.value = true;
}
const scrollDragging = (e: MouseEvent | TouchEvent, eventType?: string) => {
    e.preventDefault();
    if (!timelineSliderRef.value) return;
    const newX = eventType === 'touch' ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
    const maxWidth = 616 - scrollbarWidth.value;
    const newPosition = Math.max(0, Math.min(maxWidth,
        (newX - startScrollX) + scrollbarTr.value
    ));
    startScrollX = newX;
    const targetWidthPro = (newPosition - scrollbarTr.value) / maxWidth;
    timeLineCurrentTime.value = getVideoCurTi() + (videoDuration.value * timelineScrollPro * targetWidthPro);
    timelineScrollLeft.value = timelineScrollLeft.value + ((timelinesWidth.value - 620) * targetWidthPro);
    scrollbarTr.value = newPosition;

}

const stopScrollDrag = async () => {
    document.removeEventListener('mousemove', scrollDragging);
    document.removeEventListener('mouseup', stopScrollDrag);
    isUserScrollbar.value = false;
}
const handleMouseDown = () => {
    // 鼠标按钮被按下
    isUserInteracting.value = true;
};
const handleMouseUp = () => {
    // 鼠标按钮被释放
    isUserInteracting.value = false;
};
const changCurRentTime = (currentTime: number, isOp: boolean) => {
    videoCurRentTime.value = currentTime;
    if (!isUserInteracting.value) {
        lastSliderDotLeft = (timelinesWidth.value - 620) + sliderDotLeft.value;
        const tlineScrLeft = currentTime / videoDuration.value * timelinesWidth.value;
        if ((timelinesWidth.value - tlineScrLeft) < 620 - sliderDotLeft.value) {
            if (timelineScrollLeft.value !== timelinesWidth.value - 620 || scrollbarTr.value !== 616 - scrollbarWidth.value) {
                timelineScrollLeft.value = timelinesWidth.value - 620;
                scrollbarTr.value = 616 - scrollbarWidth.value;
            }
            sliderDotLeft.value += (tlineScrLeft - lastSliderDotLeft);
            return;
        }
        const sliDotleft = tlineScrLeft - sliderDotLeft.value;
        if (sliDotleft <= 0) {
            sliderDotLeft.value = tlineScrLeft;
            timelineScrollLeft.value = 0;
            scrollbarTr.value = 0;
            return;
        }
        timelineScrollLeft.value = sliDotleft;
        scrollbarTr.value = (sliDotleft / (timelinesWidth.value - 620)) * (616 - scrollbarWidth.value);
        scrollbarTr.value = (timelineScrollLeft.value / (timelinesWidth.value - 620)) * (616 - scrollbarWidth.value);
    }
}
const changVideoDuration = (duration: number) => {
    videoDuration.value = duration;
    scrollbarTr.value = 0;
    timelineScrollLeft.value = 0;
    totalIntervalTimes.value = Math.floor(videoDuration.value / intervalTime.value);
    lastTlWidth.value = timelineWidth.value * (videoDuration.value - (totalIntervalTimes.value * intervalTime.value)) / intervalTime.value;

    timelinesWidth.value = totalIntervalTimes.value * timelineWidth.value + lastTlWidth.value;
    if (timelinesWidth.value >= 12731) {
        scrollbarWidth.value = 30;
    } else {
        scrollbarWidth.value = (620 / timelinesWidth.value) * 616
    }

    timelineScrollPro = (timelinesWidth.value - 620) / timelinesWidth.value;
    maxStartTime.value = duration - 5;
    videoCurRentTime.value = 0;
}

const addCard = (id: number) => {
    switch (id) {
        case 0:
            addLikeCard();
            break;
        case 1:
            addLinkCard();
            break;
        case 2:
            addVoteCard();
            break;
    }
}
const addLikeCard = () => {
    if (interactionCard.likeList.length !== 0) {
        Message.error('一个视频只能配置一个关注引导，一个三连引导');
        return;
    }
    const newLikeCard = reactive<InteractionLike>({
        left: 50,
        top: 50,
        type: 1, // 1 三连加关注 2 仅三连 3 仅关注
        timeStart: videoCurRentTime.value,
        timeEnd: videoCurRentTime.value + 5,
        className: 'hl-card-hide',
        isShow: false,
        isExpand: true,
    });
    interactionCard.likeList.push(newLikeCard);
}
const addLinkCard = () => {
    interactionCard.linkList.forEach((item, index) => {
        if (item.isExpand) {
            interactionCard.linkList[index].isExpand = false;
        }
    });
    const newLinkCard = reactive<InteractionLink>({
        left: 50,
        top: 50,
        timeStart: videoCurRentTime.value,
        timeEnd: videoCurRentTime.value + 5,
        link_url: '',
        link_content: '',
        className: 'hl-card-hide',
        isShow: false,
        isClose: false,
        isCloseTime: 0,
        closeProgress: 0,
        isExpand: true,
    });
    interactionCard.linkList.push(newLinkCard);
}
const addVoteCard = () => {
    interactionCard.voteList.forEach((item, index) => {
        if (item.isExpand) {
            interactionCard.voteList[index].isExpand = false;
        }
    });
    const newVoteCard = reactive<InteractionVote>({
        left: 50,
        top: 50,
        timeStart: videoCurRentTime.value,
        timeEnd: videoCurRentTime.value + 5,
        question: '',
        className: '',
        isShow: false,
        isClose: false,
        isCloseTime: 0,
        closeProgress: 0,
        isExpand: true,
        isCustom: false,
        VoteOptions: [
            {
                id: 0,
                voteid: 0,
                option_text: '',
                anvote_count: 0,
            },
            {
                id: 0,
                voteid: 0,
                option_text: '',
                anvote_count: 0,
            }
        ]
    });
    interactionCard.voteList.push(newVoteCard);
}
const deleteCard = (type: string, index: number) => {
    switch (type) {
        case 'like':
            interactionCard.likeList.splice(index, 1);
            break;
        case 'link':
            interactionCard.linkList.splice(index, 1);
            break;
        case 'vote':
            interactionCard.voteList.splice(index, 1);
            break;
    }
}
//  鼠标按下时拖动事件
const mouseDown = (e: MouseEvent, type: string, index: number) => {
    let startX = e.clientX;
    let x: number = 0;
    let lastTime: number = 0;
    switch (type) {
        case 'like':
            lastTime = interactionCard.likeList[index].timeStart;
            break;
        case 'link':
            lastTime = interactionCard.linkList[index].timeStart;
            break;
        case 'vote':
            lastTime = interactionCard.voteList[index].timeStart;
            break;
    };
    //鼠标移动时
    document.onmousemove = (e: MouseEvent) => {
        const moveDisX = e.clientX;

        x = moveDisX - startX;
        //x = Math.max(0, moveDisX - startX);
        startX = moveDisX;
        switch (type) {
            case 'like':
                interactionCard.likeList[index].timeStart += x * (intervalTime.value / timelineWidth.value);
                interactionCard.likeList[index].timeEnd += x * (intervalTime.value / timelineWidth.value);
                break;
            case 'link':
                interactionCard.linkList[index].timeStart += x * (intervalTime.value / timelineWidth.value);
                interactionCard.linkList[index].timeEnd += x * (intervalTime.value / timelineWidth.value);
                break;
            case 'vote':
                interactionCard.voteList[index].timeStart += x * (intervalTime.value / timelineWidth.value);
                interactionCard.voteList[index].timeEnd += x * (intervalTime.value / timelineWidth.value);
                break;
        };

    }
    //鼠标抬起 清除移动和鼠标抬起事件
    document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        switch (type) {
            case 'like':
                timeLineCurrentTime.value = videoCurRentTime.value + (interactionCard.likeList[index].timeStart - lastTime - (videoCurRentTime.value - lastTime)) + 0.1;
                break;
            case 'link':
                timeLineCurrentTime.value = videoCurRentTime.value + (interactionCard.linkList[index].timeStart - lastTime - (videoCurRentTime.value - lastTime)) + 0.1;
                break;
            case 'vote':
                timeLineCurrentTime.value = videoCurRentTime.value + (interactionCard.voteList[index].timeStart - lastTime - (videoCurRentTime.value - lastTime)) + 0.1;
                break;
        };
    }

};
watch(() => timeline.value, (newValue) => {
    switch (newValue) {
        case 3:
            updateScrollLeft(100)
            break;
        case 2:
            updateScrollLeft(80)
            break;
        case 1:
            updateScrollLeft(40)
            break;
    }
});

watch(() => timelineScrollLeft.value, (newValue) => {
    if (newValue === 0) {
        sliderDotLeft.value = 0;
    }
});

const updateScrollLeft = (tlWidth: number) => {
    const lastTimelineWidth = timelineWidth.value;
    const lastTimelineScrollLeft = timelineScrollLeft.value;
    timelineWidth.value = tlWidth;
    lastTlWidth.value = timelineWidth.value * (videoDuration.value - (totalIntervalTimes.value * intervalTime.value)) / intervalTime.value;

    timelinesWidth.value = totalIntervalTimes.value * timelineWidth.value + lastTlWidth.value;
    if (timelinesWidth.value >= 12731) {
        scrollbarWidth.value = 30;
    } else {
        scrollbarWidth.value = (620 / timelinesWidth.value) * 616
    }
    timelineScrollPro = (timelinesWidth.value - 620) / timelinesWidth.value;
    if (timelineScrollLeft.value === 0) {
        sliderDotLeft.value = sliderDotLeft.value / lastTimelineWidth * timelineWidth.value;
        return;
    }
    const newTlScrollLeft = (((lastTimelineScrollLeft + sliderDotLeft.value) / lastTimelineWidth) * timelineWidth.value);

    if ((newTlScrollLeft - sliderDotLeft.value) >= (timelinesWidth.value - 620)) {
        timelineScrollLeft.value = (timelinesWidth.value - 620);
        scrollbarTr.value = (timelineScrollLeft.value / (timelinesWidth.value - 620)) * (616 - scrollbarWidth.value);
        sliderDotLeft.value = sliderDotLeft.value + ((newTlScrollLeft - sliderDotLeft.value) - (timelinesWidth.value - 620));
        return;
    }
    if (newTlScrollLeft < sliderDotLeft.value) {
        sliderDotLeft.value = newTlScrollLeft;
        timelineScrollLeft.value = 0;
        scrollbarTr.value = 0;
    } else {
        timelineScrollLeft.value = newTlScrollLeft - sliderDotLeft.value;
        scrollbarTr.value = (timelineScrollLeft.value / (timelinesWidth.value - 620)) * (616 - scrollbarWidth.value);
    }

}
const formatTime = (seconds: number) => {
    if (seconds === 0) {
        return '00:00';
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
};
const formatSeconds = (seconds: number, type: string) => {
    const hours: number = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    if (type === 'hours') {
        return `${padZero(hours)}`;
    } else if (type === 'minutes') {
        return `${padZero(minutes)}`;
    } else if (type === 'secs') {
        return `${padZero(secs)}`;
    }
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(secs)}`;
}
const getSeconds = (seconds: number, type: string): number => {
    const hours: number = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    if (type === 'hours') {
        return hours;
    } else if (type === 'minutes') {
        return minutes;
    } else if (type === 'secs') {
        return secs;
    }
    return 0;
}
// 辅助函数，用于在数字前添加零
const padZero = (num: number) => {
    return num.toString().padStart(2, '0');
};
const getVideoCurTi = (): number => {
    if (!videoPlayerRef.value) {
        return 0;
    }
    return videoPlayerRef.value.getVideoCurTime();
}
onMounted(() => {
    url.value = URL.createObjectURL(props.file);
    title.value = props.file.name;
    if (!timelineSliderRef.value) return;
});
onBeforeUnmount(() => {
    document.removeEventListener('mousemove', dragging); // 移除事件监听
    document.removeEventListener('mouseup', stopDrag); // 移除事件监听
    URL.revokeObjectURL(url.value);
    if (!timelineSliderRef.value) return;
});
</script>
<style lang="scss" scoped>
.card-content {
    box-sizing: border-box;
    width: 100%;
    height: auto;
    padding: 0 32px 24px;

    .card-content-warp {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        max-height: 655px;
        overflow-y: auto;
        overflow-x: hidden;

        .card-content-header {
            width: 100%;
            height: 36px;
            color: #222;
            font-size: 16px;
            line-height: 36px;
            max-width: 520px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

        }

        .card-content-body {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            display: flex;

            .card-content-body-left {
                width: 660px;

                .video-box {
                    width: 660px;
                    height: calc(660px * 9/16);
                }

                .timeline {
                    width: 660px;
                    height: 144px;
                    box-sizing: border-box;
                    border: 1px solid #a2a2a2;
                    background: #fafafa;

                    .timeline-header {
                        height: 44px;
                        width: 100%;
                        border-bottom: 1px solid #a2a2a2;
                        box-sizing: border-box;

                        .timeline-header-box {
                            height: 100%;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            padding-left: 40px;
                            color: #757575;

                            .timeline-header-box-slider {
                                height: 100%;
                                width: 140px;
                                display: flex;
                                align-items: center;

                                .timeline-slider {
                                    display: flex;
                                    align-items: center;
                                    width: 70px;
                                    margin: 0 10px;
                                }

                                .icon {
                                    height: 20px;
                                    width: 20px;
                                    cursor: pointer;
                                }

                            }
                        }
                    }

                    .timeline-body {
                        width: 100%;
                        height: 100px;
                        box-sizing: border-box;

                        .timeline-body-warp {
                            height: 100%;
                            width: 100%;
                            display: flex;

                            .timeline-body-left {
                                box-sizing: border-box;
                                height: 100%;
                                width: 40px;
                                border-right: 1px solid #a2a2a2;

                                .timeline-item-wrap {
                                    width: 100%;
                                    height: 100%;
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    justify-content: center;

                                    .timeline-item-img {
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        width: 20px;
                                        height: 20px;
                                        margin: 10px 0;

                                        img {
                                            width: 100%;
                                            height: 100%;
                                        }
                                    }
                                }
                            }

                            .timeline-body-right {
                                height: 100%;
                                width: 100%;
                                position: relative;

                                .timeline-body-slider {
                                    position: relative;
                                    height: 100%;
                                    width: 620px;
                                    overflow: hidden;
                                    box-sizing: border-box;

                                    .timeline-body-slider-lines {
                                        position: absolute;
                                        left: 0;
                                        top: 0;
                                        width: 100%;
                                        height: 93px;
                                        box-sizing: border-box;
                                        background: #ffffff;
                                        transition-timing-function: linear;
                                        transition-duration: 200ms;
                                        -webkit-transition-property: -webkit-transform;
                                        transition-property: -webkit-transform;
                                        transition-property: transform;
                                        transition-property: transform, -webkit-transform;
                                        -webkit-user-select: none;
                                        -moz-user-select: none;
                                        -ms-user-select: none;
                                        user-select: none;

                                        .timeline-slider-line {
                                            position: relative;
                                            height: 34px;
                                            width: auto;
                                            white-space: nowrap;
                                            pointer-events: none;
                                            font-size: 0;

                                            .timeline-slider {
                                                display: inline-block;
                                                position: relative;
                                                top: 0;
                                                height: 6px;
                                                width: 60px;
                                                margin: 0;
                                                padding: 0;
                                                box-sizing: border-box;
                                                border-right: 1px solid #a2a2a2;
                                                pointer-events: none;

                                                .dot-time {
                                                    position: absolute;
                                                    bottom: -16px;
                                                    left: 0;
                                                    font-size: 10px;
                                                    color: #a2a2a2;
                                                    pointer-events: none;
                                                }
                                            }

                                        }


                                        .timeline-line {
                                            background: #fafafa;
                                            font-size: 12px;
                                            height: 44px;
                                            margin-bottom: 16px;
                                            pointer-events: none;
                                            position: relative;

                                            .timeline-box-container {
                                                position: relative;

                                                .timeline-box {
                                                    -webkit-box-align: center;
                                                    -ms-flex-align: center;
                                                    align-items: center;
                                                    background: #f5fff6;
                                                    border: 2px solid #fff;
                                                    border-radius: 6px;
                                                    bottom: 2px;
                                                    -webkit-box-sizing: border-box;
                                                    box-sizing: border-box;
                                                    color: #0dc1b4;
                                                    display: -webkit-box;
                                                    display: -ms-flexbox;
                                                    display: flex;
                                                    padding: 0 20px;
                                                    pointer-events: all;
                                                    position: absolute;
                                                    top: 2px;
                                                    -webkit-user-select: none !important;
                                                    -moz-user-select: none !important;
                                                    -ms-user-select: none !important;
                                                    user-select: none !important;
                                                    position: absolute;
                                                    cursor: pointer;
                                                    left: var(--left);
                                                    top: 0px;
                                                    z-index: 20;
                                                    user-select: auto;
                                                    width: var(--width);
                                                    height: 40px;

                                                    .timeline-content-bar {
                                                        width: 100%;

                                                        .timeline-content {
                                                            display: inline-block;
                                                            height: 100%;
                                                            vertical-align: middle;
                                                            width: 100%;
                                                            overflow: hidden;
                                                            text-overflow: ellipsis;
                                                            white-space: nowrap;
                                                        }

                                                        .dragbar {
                                                            display: block;
                                                            // display: none;
                                                            font-weight: 700;
                                                            height: 100%;
                                                            height: 12px;
                                                            overflow: hidden;
                                                            position: absolute;
                                                            top: 50%;
                                                            -webkit-transform: translateY(-50%);
                                                            transform: translateY(-50%);
                                                            //vertical-align: middle;
                                                        }

                                                        .dragbar-left {
                                                            left: 8px;
                                                        }

                                                        .dragbar-right {
                                                            right: 8px;
                                                        }
                                                    }
                                                }

                                                .editor-active {
                                                    border-color: var(--brand_blue);
                                                }
                                            }
                                        }
                                    }


                                    .bscroll-horizontal-scrollbar {
                                        position: absolute;
                                        z-index: 9999;
                                        height: 7px;
                                        left: 2px;
                                        right: 2px;
                                        width: 616px;
                                        bottom: 0px;
                                        overflow: hidden;

                                        .bscroll-indicator {
                                            box-sizing: border-box;
                                            position: absolute;
                                            background: rgba(0, 0, 0, 0.5);
                                            border: 1px solid rgba(255, 255, 255, 0.9);
                                            border-radius: 3px;
                                            height: 100%;
                                            transition-timing-function: linear;
                                            cursor: pointer;
                                        }
                                    }
                                }

                                .timeline-pointer-wrap {
                                    top: 0;
                                    left: 0;
                                    right: 0;
                                    position: absolute;
                                    height: 100%;
                                    width: 620px;
                                    z-index: 2;
                                    box-sizing: border-box;
                                    pointer-events: none;


                                    .slider-dot {
                                        position: absolute;
                                        top: 9px;
                                        height: 89px;
                                        width: 2px;
                                        border-left: 2px solid rgb(238, 81, 121);
                                        fill: rgb(238, 81, 121);
                                        cursor: pointer;
                                        pointer-events: all;
                                        transition-timing-function: linear;

                                        .dot {
                                            position: absolute;
                                            top: -9px;
                                            left: -7px;
                                            height: 10px;
                                            width: 13px;
                                        }
                                    }
                                }
                            }

                        }
                    }
                }
            }

            .card-content-body-right {
                width: 100%;
                border: 3px solid #f1f1f1;
                border-radius: 4px;
                margin-left: 10px;
                background: #fafafa;

                .card-content-body-right-warp {
                    .editor-right-tab {
                        display: flex;

                        .editor-right-tab-item {
                            box-sizing: border-box;
                            border-radius: 8px;
                            background: #fff;
                            border: 2px solid #f1f1f1;
                            box-shadow: 0 0 0 1px #f1f1f1;
                            color: #757575;
                            margin: 8px 12px;
                            padding: 0 2px;
                            height: 76px;
                            width: 76px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            cursor: pointer;

                            .editor-icon {
                                width: 100%;
                                height: 50px;
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                img {
                                    width: 34px;
                                    height: 34px;
                                }
                            }

                            span {
                                font-size: 13px;
                            }
                        }

                        .is_active {
                            border: 2px solid var(--brand_blue);
                        }
                    }

                    .editor-right-add {
                        -webkit-box-pack: center;
                        -ms-flex-pack: center;
                        -webkit-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;
                        background: #fff;
                        border: 1px solid silver;
                        border-radius: 3px;
                        color: #61666d;
                        fill: #61666d;
                        cursor: pointer;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        font-size: 15px;
                        height: 50px;
                        justify-content: center;
                        margin: 10px 10px;
                        text-align: center;

                        .icon-plus {
                            width: 16px;
                            height: 16px;
                        }
                    }

                    .editor-right-list-item {
                        margin-bottom: 10px;

                        .editor-right-card {
                            -webkit-user-select: none;
                            -moz-user-select: none;
                            -ms-user-select: none;
                            user-select: none;

                            .editor-right-card-head {
                                -webkit-box-pack: justify;
                                -ms-flex-pack: justify;
                                background: #fff;
                                border-bottom: 1px solid #e7e7e7;
                                border-radius: 4px 4px 0 0;
                                -webkit-box-sizing: border-box;
                                box-sizing: border-box;
                                cursor: pointer;
                                display: -webkit-box;
                                display: -ms-flexbox;
                                display: flex;
                                font-size: 12px;
                                justify-content: space-between;
                                line-height: 50px;
                                padding-left: 12px;
                                position: relative;
                                width: 100%;

                                .editor-right-active {
                                    border-radius: 4px 0 0 4px;
                                    height: 100%;
                                    left: 0;
                                    position: absolute;
                                    top: 0;
                                    width: 4px;
                                }

                                .editor-right-text {
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    width: 120px;
                                }

                                .editor-right-delete {
                                    -webkit-box-sizing: border-box;
                                    box-sizing: border-box;
                                    cursor: pointer;
                                    line-height: 1;
                                    padding: 13px 6px;

                                    .editor-right-delete-svg {
                                        height: 22px;
                                        width: 22px;
                                    }
                                }

                                .editor-right-time {
                                    -webkit-box-flex: 0;
                                    -ms-flex: none;
                                    flex: none;
                                }

                                .editor-right-time-next {
                                    margin-left: .3em;
                                }

                                .editor-right-unfold {
                                    -webkit-box-flex: 0;
                                    -ms-flex: none;
                                    flex: none;
                                    height: 50px;
                                    position: relative;
                                    -webkit-transform: rotate(0deg);
                                    transform: rotate(0deg);
                                    -webkit-transition: -webkit-transform .2s ease-in-out;
                                    transition: -webkit-transform .2s ease-in-out;
                                    transition: transform .2s ease-in-out;
                                    transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out;
                                    width: 32px;

                                    &:before {
                                        border-right: 1px solid #757575;
                                        border-top: 1px solid #757575;
                                        content: "";
                                        display: block;
                                        height: 9px;
                                        left: 50%;
                                        margin: -8px 0 0 -5px;
                                        position: absolute;
                                        top: 50%;
                                        -webkit-transform: rotate(135deg);
                                        transform: rotate(135deg);
                                        width: 9px;
                                    }
                                }

                            }

                            .editor-right-card-body {
                                background: #fff;
                                border-radius: 4px;
                                font-size: 14px;
                                overflow: auto;
                                // overflow-x: hidden;
                                // overflow-y: auto;
                                padding: 0 10px;
                                // height: 252px;
                                height: 0;
                                max-height: 374px;
                                -webkit-transition: height .2s ease-in-out;
                                transition: height .2s ease-in-out;

                                .editor-right-card-input-title {
                                    clear: both;
                                    font-weight: 700;
                                    padding: 16px 0 12px;
                                }

                                .editor-right-card-switch {
                                    color: #757575;
                                    display: -webkit-box;
                                    display: -ms-flexbox;
                                    display: flex;
                                    -ms-flex-wrap: wrap;
                                    flex-wrap: wrap;
                                    font-size: 14px;
                                    line-height: 18px;
                                    padding-top: 2px;

                                    :deep(.hui-radio) {
                                        .hui-radio-wrap {
                                            .radio-label {
                                                font-size: 13px;
                                            }
                                        }
                                    }
                                }

                                .editor-right-card-input {

                                    .editor-right-card-input-title {
                                        clear: both;
                                        font-weight: 700;
                                        padding: 16px 0 12px;
                                    }

                                    .editor-right-card-input-item {
                                        position: relative;

                                        input {
                                            border: 1px solid #e7e7e7;
                                            border-radius: 4px;
                                            -webkit-box-sizing: border-box;
                                            box-sizing: border-box;
                                            display: inline-block;
                                            height: 36px;
                                            line-height: 36px;
                                            margin: 0;
                                            outline: none;
                                            padding: 0 40px 0 12px;
                                            width: 100%;
                                        }

                                        .editor-right-card-input-item-num {
                                            color: #999;
                                            line-height: 36px;
                                            position: absolute;
                                            right: 10px;
                                            top: 0;
                                        }

                                        .editor-right-card-input-item-delete {
                                            -webkit-box-sizing: border-box;
                                            box-sizing: border-box;
                                            cursor: pointer;
                                            line-height: 1;
                                            padding-left: 5px;

                                            .editor-right-card-input-item-delete-svg {
                                                height: 24px;
                                                vertical-align: middle;
                                                width: 24px;
                                            }
                                        }

                                    }
                                }

                                .editor-right-card-input-follow {
                                    margin-top: 10px;

                                    .editor-right-card-input-item {

                                        input {
                                            padding: 0;
                                            text-align: center;
                                            width: 50px;
                                            border: 1px solid #e7e7e7;
                                            border-radius: 4px;
                                            -webkit-box-sizing: border-box;
                                            box-sizing: border-box;
                                            display: inline-block;
                                            height: 36px;
                                            line-height: 36px;
                                            margin: 0;
                                            outline: none;

                                            &:nth-child(1) {
                                                margin-right: 8px;
                                            }

                                            &:nth-child(3) {
                                                margin: 0 8px;
                                            }

                                            &:nth-child(5) {
                                                margin-left: 8px;
                                            }

                                        }

                                    }
                                }


                                .editor-right-card-checkbox {
                                    -webkit-box-align: center;
                                    -ms-flex-align: center;
                                    align-items: center;
                                    cursor: pointer;
                                    display: -webkit-box;
                                    display: -ms-flexbox;
                                    display: flex;
                                    margin: 10px 0;
                                    -webkit-user-select: none;
                                    -moz-user-select: none;
                                    -ms-user-select: none;
                                    user-select: none;
                                    line-height: 14px;
                                    font-size: 14px;

                                    .checkbox {
                                        width: 14px;
                                        height: 14px;
                                        line-height: 14px;
                                        border-radius: 2px;
                                        border: 1px solid #bec3cc;
                                        margin: 3px 3px 3px 0;
                                        cursor: pointer;
                                    }

                                    .editor-right-card-checkbox-icon {
                                        display: inline-block;
                                        height: 18px;
                                        margin-right: 8px;
                                        position: relative;
                                        width: 18px;

                                        :deep(.icon) {
                                            width: 18px;
                                            height: 18px;
                                            fill: #61666d;
                                        }
                                    }

                                    &:hover {
                                        .editor-right-card-checkbox-icon {
                                            :deep(svg) {
                                                fill: var(--brand_blue);
                                            }
                                        }

                                        span {
                                            color: var(--brand_blue);
                                        }
                                    }
                                }

                                .editor-right-card-follow-showTime {
                                    font-size: 14px;

                                    input {
                                        border-radius: 2px;
                                        display: inline-block;
                                        height: 32px;
                                        padding: 0;
                                        text-align: center;
                                        width: 24px;
                                    }
                                }
                            }
                        }

                        .editor-unfold {
                            .editor-right-card-head {
                                .editor-right-unfold {
                                    -webkit-transform: rotate(-180deg);
                                    transform: rotate(-180deg);
                                }
                            }

                            .editor-unfold {
                                height: auto;
                            }
                        }
                    }

                    .editor-right-btn {
                        font-size: 0;
                        margin-top: 16px;
                        font-size: 12px;
                        padding: 0 10px;

                        :deep(.hl-button_wrap) {
                            border-radius: 4px;

                            &:nth-child(1) {
                                margin-right: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
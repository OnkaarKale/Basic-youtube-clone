import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
const PlayVideo = () => {
  return (
    <div>
      <div className='play-video'>
        <video src={video1}controls autoPlay muted></video>
        <h3>Onkar kale is the best web developwer in the world</h3>
        <div className='play-video-info'>
            <p>1525 Views bull; 2 days ago</p>
            <div className=''>
                <span><img src={like} alt="" />125</span>
                <span><img src={dislike} alt="" />325</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>Onkar kale</p>
                    <span>1M Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-discription">
                <p>Channel that makes learning Easy </p>
                <p>Subscribe Greatstack to Watch More videos </p>
                <hr />
                <h4>130 Comments</h4>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 Day ago</span></h3>
                        <p>you are amazing i remember when you used to make small 
                        projects videos now your making clones for big apps this 
                        10x more amazing keep
                        posting we want series for big apps like this long videos</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>288</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 Day ago</span></h3>
                        <p>you are amazing i remember when you used to make small 
                        projects videos now your making clones for big apps this 
                        10x more amazing keep
                        posting we want series for big apps like this long videos</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>288</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 Day ago</span></h3>
                        <p>you are amazing i remember when you used to make small 
                        projects videos now your making clones for big apps this 
                        10x more amazing keep
                        posting we want series for big apps like this long videos</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>288</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 Day ago</span></h3>
                        <p>you are amazing i remember when you used to make small 
                        projects videos now your making clones for big apps this 
                        10x more amazing keep
                        posting we want series for big apps like this long videos</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>288</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 Day ago</span></h3>
                        <p>you are amazing i remember when you used to make small 
                        projects videos now your making clones for big apps this 
                        10x more amazing keep
                        posting we want series for big apps like this long videos</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>288</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 Day ago</span></h3>
                        <p>you are amazing i remember when you used to make small 
                        projects videos now your making clones for big apps this 
                        10x more amazing keep
                        posting we want series for big apps like this long videos</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>288</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 Day ago</span></h3>
                        <p>you are amazing i remember when you used to make small 
                        projects videos now your making clones for big apps this 
                        10x more amazing keep
                        posting we want series for big apps like this long videos</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>288</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo

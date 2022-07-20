import React from "react";
import styles from "../components/styles/Stories.module.css";

const Story = () => {
    return (
        <div className={styles.main_div}>
            <div className={styles.box1}>
                <div className={styles.pic1}>
                    <h1>In the lab</h1>
                    <h1>with Cliff Kapono</h1>
                </div>
                <div className={styles.back1}>
                    <div className={styles.para}>
                        <p>
                            Meet pro surfer, journalist, and PhD scientist Cliff
                            Kapono, cofounder of MEGA Lab in Hilo, Hawaii. This
                            nonprofit environmental community of scientists,
                            athletes and artists uses research and storytelling
                            to help protect and preserve the local reefs—and
                            we’re proud to have made a donation to support their
                            efforts. Scroll to learn more about MEGA Lab, and
                            see Cliff in our new Spring Collection (sustainable
                            swim trunks included).
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.box2}></div>
            <br></br>
            <br></br>
            <br></br>
            <div className={styles.box3}>
                <div className={styles.img1}></div>
                <div className={styles.img2}>
                    <div className={styles.img22}></div>
                    <p>
                        “MEGA Lab is a collaboration between my good friend John
                        Burns and me—we share a desire to protect and play in
                        the ocean. We liked the idea that we could be surfers
                        and skaters and still have advanced degrees.”
                    </p>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className={styles.box4}>
                <div className={styles.left}></div>
                <div className={styles.right}></div>
            </div>
            <div className={styles.box5}></div>
            <br></br>
            <br></br>
            <br></br>
            <div className={styles.box6}>
                <div className={styles.QnA}>
                    <div className={styles.head}>
                        <p>A quick Q&A with Cliff</p>
                    </div>
                    <br></br>
                    <div className={styles.ques1}>
                        <p>Tell us a little more about MEGA Lab.</p>
                        <a>
                            CK: We use technology to bring the ocean to people
                            around the world, and to engage community members in
                            our research—like showing students how to use a
                            microscope or a drone, or making sure local youth
                            have good surfboards to ride. We want to be
                            supportive of ocean accessibility and exploration
                            for all.
                        </a>
                    </div>
                    <br></br>
                    <div className={styles.ques2}>
                        <p>What’s the MEGA Lab underwater camera?</p>
                        <a>
                            CK: It’s a 24/7 live feed that monitors a small
                            patch of reef in Hawaii. With minimal human
                            disruption, we’ve been able to identify many types
                            of reef animals already. Algae will grow on the
                            camera, so we dive down and clean it off to nurture
                            ongoing discovery.
                        </a>
                    </div>
                    <br></br>
                    <div className={styles.ques3}>
                        <p>
                            How can we all contribute to preserving the
                            environment?
                        </p>
                        <a>
                            CK: The best way to support nature is simply to
                            spend time in it. The physical, mental and spiritual
                            benefits that the outdoors provide us are hard to
                            articulate, so experiencing it firsthand is
                            essential.
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.box7}>
                <div className={styles.bo1}>
                    <div className={styles.comb}>
                        <div className={styles.left1}></div>
                        <div className={styles.right1}></div>
                    </div>
                    <div className={styles.text1}>
                        “I pursued pro surfing while getting my PhD and my
                        cofounder became a professor. MEGA Lab allows us to
                        create new technology and provide it to those who need
                        it.”
                    </div>
                </div>

                <div className={styles.bo2}>
                    <div className={styles.left2}>
                        <div className={styles.pict1}>
                            <img src="https://www.jcrew.com/brand_creative/2022/202204-Apr/m-cliffkapono/v2/2022apr_0315_cliff_img9.jpg"></img>
                        </div>
                        <div className={styles.pict2}>
                            <img src="https://www.jcrew.com/brand_creative/2022/202204-Apr/m-cliffkapono/v2/2022apr_0315_cliff_img11.jpg"></img>
                        </div>
                    </div>
                    <div className={styles.right2}>
                        <div className={styles.pict3}>
                            <img src="https://www.jcrew.com/brand_creative/2022/202204-Apr/m-cliffkapono/v2/2022apr_0315_cliff_img10.jpg"></img>
                        </div>
                        <div className={styles.text}></div>
                    </div>
                </div>
            </div>
            <div className={styles.box8}>
                <div className={styles.last}>
                    <div className={styles.word}>
                        <p>More stories to explore…</p>
                    </div>
                    <br></br>
                    <div className={styles.picture}>
                        <div className={styles.photo}>
                            <img src="https://www.jcrew.com/brand_creative/2022/footers/leslie_v2.jpg"></img>
                            <p>Get Dressed with Leslie Odom Jr.</p>
                            <a href="">Discover our spring campaign</a>
                        </div>
                        <div className={styles.photo}>
                            <img src="https://www.jcrew.com/brand_creative/2022/footers/m_edit_almostsummer.jpg"></img>
                            <p>The edit: almost summer.</p>
                            <a href="">Shop the roundup</a>
                        </div>
                        <div className={styles.photo}>
                            <img src="https://www.jcrew.com/brand_creative/2022/footers/jhb.jpg"></img>
                            <p>Mixed media with Joe Henry Baker</p>
                            <a href="">Meet the artist</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;

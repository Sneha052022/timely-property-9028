import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../components/styles/Kids.module.css";

export default function Kids() {
    useEffect(() => {
        document.title = "Kids Clothes: Boys & Girls | J.Crew";
        if (window.pageYOffset > 300) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, []);
    return (
        <>
            <div className={styles.main}>
                <div className={styles.KidsHeader}>
                    <h1>welcome to crewcuts!</h1>
                    <h4>everything you love about J.Crew - only smaller.</h4>
                </div>
                <div className={styles.MainPageTop}>
                    <div>
                        <div>
                            <p
                                style={{
                                    fontSize: 78,
                                    lineHeight: 1,
                                    color: "#0181AA",
                                }}
                            >
                                here comes the sun!
                            </p>
                            <p
                                style={{
                                    fontSize: 17,
                                    color: "#F2602B",
                                    fontWeight: "500",
                                    textAlign: "right",
                                }}
                            >
                                and it's bringing along bold stripes, colorful
                                classics and lots of accessory fun.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.midWrap}>
                    <h3>Shops, stories & more</h3>
                    <div className={styles.midImgWrap}>
                        <div className={styles.midImg}>
                            <Link to="/products/kids">
                                <img
                                    src="https://www.jcrew.com/brand_creative/2022/202205-May/flyout/2022may_0426_flyouts_cc_img0.jpg"
                                    alt=""
                                />
                                <h4>New Arrivals</h4>
                            </Link>
                        </div>
                        <div className={styles.midImg}>
                            <Link to="/products/kids">
                                <img
                                    src="https://www.jcrew.com/brand_creative/2022/202205-May/flyout/2022may_0426_flyouts_cc_img1.jpg"
                                    alt=""
                                />
                                <h4>The mini-me shop</h4>
                            </Link>
                        </div>
                        <div className={styles.midImg}>
                            <Link to="/products/kids">
                                {" "}
                                <img
                                    src="	https://www.jcrew.com/brand_creative/2022/202205-May/flyout/2022may_0426_flyouts_cc_img2.jpg"
                                    alt=""
                                />
                                <h4>(Swim) suit yourself</h4>
                            </Link>
                        </div>
                        <div className={styles.midImg}>
                            <Link to="/products/kids">
                                <img
                                    src="	https://www.jcrew.com/brand_creative/2022/202205-May/flyout/2022may_0426_flyouts_cc_img3.jpg"
                                    alt=""
                                />
                                <h4>It's dress season</h4>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.aboveFooter}>
                    <p>
                        Crewcuts is your home base for the very best kids'
                        clothes on the planet. Our kids' T-shirts are printed
                        with awesome designs dreamed up by the mad scientists in
                        our top–secret graphics lab, and they’re washable,
                        wearable and comfortable, too. Speaking of comfortable,
                        our leggings for girls are cartwheel-tested and
                        playground-approved, and the same goes for our kids'
                        shoes. In our own designs and in exclusive styles from
                        kid-favorites like Adidas, Vans, and New Balance, these
                        sneakers, sandals, slippers, and snow boots will keep
                        their feet covered in every climate. The whole fam have
                        big plans? Our boys' suits, boys' chinos and girls'
                        dresses are spiffy enough to earn them a spot at the big
                        kids’ table and make for a memorable family photo.
                        That’s why we make every crewcuts style in
                        fidget-friendly fabrics and fits that are so cute even
                        adults say, "I wish that came in my size."
                    </p>
                </div>
            </div>
        </>
    );
}

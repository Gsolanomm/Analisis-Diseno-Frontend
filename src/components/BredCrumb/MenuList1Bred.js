import React from 'react'
import Icon from '../../assets/images/title_icon.png'

function MenuList1Bred() {
    return (
        <>
            <section className="bredcrumb_section menu_list">
                <div className="container">
                    <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
                        <span className="icon">
                            <img src={Icon} alt="img" />
                        </span>
                        <span className="sub_text">Our menu</span>
                        <h2>delicious tasty dishes in paris</h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MenuList1Bred
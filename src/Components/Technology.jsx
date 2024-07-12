import React from "react";
import { Container } from "react-bootstrap";
import device_img from "../assets/images/webp/device_img.webp";
import treatment_img from "../assets/images/webp/treatment_img.webp";
import top_leaf from "../assets/images/svg/top_leaf.svg";
import bottom_leaf from "../assets/images/svg/bottom_leaf.svg";

function Technology() {
  return (
    <>
      <div className=" position-relative">
        <Container>
          <div className=" d-flex justify-content-center">
            <div className="cutting_main_box  w-100 mt_42">
              <div className=" d-flex align-items-center justify-content-center gap_15 ">
                <div className="heading_line w-100"></div>
                <h2 className="   mb-0 fw-normal  text-32 lh-46 ff-kaushan color-green ">
                  Cutting Edge Technology
                </h2>
                <div className="heading_line w-100"></div>
              </div>
              <h1 className="  mb-0 ff-archivo  main_heading_max_w mx-auto fw-semibold text-48 lh-62 text-center color-lightblack mt_10  ">
                Devices and Treatments to meet your needs
              </h1>
              {/* cards */}
              <div className="   mt-md-5 mt-3 d-flex flex-wrap flex-lg-nowrap justify-content-center justify-content-lg-start align-items-center gap_40 pt-2">
                <div className="device_card bg-white  w-100">
                  <img className=" w-100" src={device_img} alt="device_img" />
                  <div className=" inside_padding">
                    <h6 className=" mb-0   fw-semibold ff-archivo text-25 lh-32 color-lightblack">
                      Devices
                    </h6>
                    <p className=" mb-0  ff-archivo fw-normal text-16 lh-24 color-lightgreen sm:mt-3 mt-2 ">
                      Our state-of-the-art devices are designed to target a
                      variety of skin concerns with precision and efficacy.
                    </p>
                    <button className=" mt_18 common_btn text-white ff-archivo fw-semibold text-18 ">
                      Our Devices
                    </button>
                  </div>
                </div>
                <div className="device_card bg-white  w-100">
                  <img
                    className=" w-100"
                    src={treatment_img}
                    alt="treatment_img"
                  />
                  <div className=" inside_padding">
                    <h6 className=" mb-0   fw-semibold ff-archivo text-25 lh-32 color-lightblack">
                      Treatments
                    </h6>
                    <p className=" mb-0  ff-archivo fw-normal text-16 lh-24 color-lightgreen mt-3 ">
                      At Halsey Dermatology, we offer a comprehensive range of
                      treatments to address your unique skin care needs.
                    </p>
                    <button className=" mt_18 common_btn text-white ff-archivo fw-semibold text-18 ">
                      Our Treatments
                    </button>
                  </div>
                </div>
                {/* leaf */}
              </div>
            </div>
          </div>
        </Container>
        <div className=" position-absolute d-none d-md-block top_leaf_pos">
          <img src={top_leaf} alt="top_leaf" />
        </div>
        <div className=" position-absolute d-none d-md-block bottom_leaf_pos">
          <img src={bottom_leaf} alt="bottom_leaf" />
        </div>
      </div>
    </>
  );
}

export default Technology;

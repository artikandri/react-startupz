import React from "react";
import rocket from "@/assets/images/subtract.svg";
import { animatePath } from "@/utils/animations";

animatePath();

const Contacts = ({ clickHandlerThanks }) => {
  return (
    <>
      <section
        className="overflow-hidden text-white bg-secondary-yellow"
        id="Work"
      >
        <div className="xl:px-[8rem] flex flex-col justify-center items-center lg:items-start px-4 container pb-16 z-20 relative">
          <h4 className="text-4xl font-bold md:text-6xl lg:w-2/3 pt-14">
            Are you ready <br className="hidden lg:block" /> to board this
            rocket ship?
          </h4>
          <p className="text-xl md:text-2xl pt-7">
            Share your excitement with us.
          </p>
          <div className="z-20 p-5 mt-5 md:pt-20 bg-whitesmoke md:w-128 rounded-2xl">
            <form className="flex flex-col justify-center gap-4 md:px-10">
              <label className="hidden" htmlFor="name">
                Name*
              </label>
              <input
                className="w-full px-5 py-3.5 font-medium border-0 shadow-lg text-lg rounded-xl text-darkslategray"
                type="name"
                name="name"
                id="name"
                placeholder="Name*"
                required
              />
              <label className="hidden" htmlFor="email">
                Email*
              </label>
              <input
                className="w-full px-5 py-3 text-lg font-medium border-0 shadow-lg rounded-xl text-darkslategray"
                type="email"
                name="email"
                id="email"
                placeholder="Email*"
                required
              />
              <label className="hidden" htmlFor="message">
                Message*
              </label>
              <textarea
                className="w-full px-5 py-3 text-lg border-0 shadow-lg font-roboto rounded-xl text-darkslategray"
                name="message"
                id="message"
                cols="50"
                rows="9"
                placeholder="Message*"
                required
              ></textarea>
              <div className="flex justify-center">
                <button
                  type="submit"
                  onClick={clickHandlerThanks}
                  className="px-8 py-2 border-0 mt-2 md:mb-10 text-lg font-bold text-white no-underline rounded-full bg-darkslategray hover:-translate-y-0.5 transition-all hover:shadow-md"
                >
                  Shoot us a message
                </button>
              </div>
            </form>
          </div>
          <div className="absolute z-0 hidden -bottom-1 lg:block lg:-right-52 xl:right-32">
            <svg
              width="668"
              height="545"
              viewBox="0 0 668 545"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.25"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M196.086 442.513C188.897 450.112 188.142 458.64 193.992 464.656C199.9 470.732 208.495 470.029 215.951 462.92L290.884 390.062C293.203 392.447 295.514 394.793 297.793 397.107L297.807 397.122L297.843 397.158L297.863 397.178L297.864 397.179L297.869 397.185L297.878 397.194L297.884 397.2C300.116 399.466 302.317 401.701 304.468 403.913L306.363 405.862L318.425 418.267C323.268 423.248 327.268 427.458 331.022 431.485C332.26 433.96 332.754 436.734 332.443 439.467C326.672 473.986 320.682 508.527 314.195 544.575H369.181C371.467 542.359 373.731 540.161 375.966 537.988L376.18 537.78C401.834 512.977 428.298 487.363 454.278 461.728C471.539 445.533 482.977 424.081 486.852 400.634C489.991 376.82 485.561 352.536 474.189 331.209C473.598 330.391 473.175 329.465 472.945 328.485C472.715 327.505 472.682 326.492 472.848 325.504C473.015 324.516 473.377 323.573 473.914 322.731C474.451 321.889 475.152 321.165 475.975 320.601C502.423 295.447 528.817 269.785 554.394 244.354C566.273 232.783 577.257 220.327 587.254 207.09C626.505 152.05 653.465 89.1283 666.333 22.5295C667.4 19.4196 667.693 16.0881 667.185 12.8219C666.678 9.55573 665.386 6.45271 663.421 3.78003C659.759 0.0139962 653.514 -0.959326 645.357 0.955988C615.605 7.64756 590.648 13.7733 565.486 21.8538C506.936 40.0668 453.835 72.2534 410.728 115.658C400.402 126.247 389.769 136.552 379.361 146.639L379.36 146.64C376.911 149.014 374.473 151.376 372.056 153.727L371.889 153.889C362.41 163.035 352.598 172.505 342.961 182.132C341.603 183.982 339.559 185.207 337.28 185.541C335.001 185.874 332.673 185.287 330.806 183.91C322.319 179.102 313.267 175.389 303.867 172.862C285.356 167.721 265.859 167.655 247.43 172.671C229.001 177.687 212.324 187.599 199.156 201.363C174.052 225.388 149.054 249.811 124.776 273.531L122.119 276.126L116.933 281.169C107.716 290.247 95.0044 302.607 83.4333 313.858L83.426 313.865C81.3029 315.89 79.5086 318.235 78.1064 320.816C76.8343 323.376 76.396 326.278 76.8525 329.119C77.309 331.96 78.6376 334.598 80.6534 336.667C82.1187 338.171 83.8922 339.34 85.8491 340.09C87.8059 340.84 89.8985 341.154 91.9794 341.01C93.1166 340.998 94.2483 340.87 95.3569 340.628L95.5342 340.596C95.7354 340.568 95.9503 340.535 96.1753 340.5C96.6105 340.432 97.0832 340.359 97.5659 340.306C117.15 337.555 137.02 334.621 156.239 331.78L158.224 331.442L158.296 331.372L160.304 331.058L160.588 331.016C179.666 328.149 199.487 325.261 219.154 322.524C222.717 322.424 226.201 323.678 228.906 326.033C232.711 329.66 236.84 333.907 241.66 338.864C243.985 341.255 246.388 343.762 248.586 346.054L248.595 346.064L248.599 346.068C250.445 347.994 252.146 349.768 253.534 351.195L254.13 351.809L257.079 354.841L266.52 364.551C267.835 365.992 269.03 367.54 270.092 369.176L270.663 370.002L196.086 442.513ZM-0.000305176 544.575C24.3424 521.372 48.6826 497.664 73.0202 473.452L149.083 399.495C151.108 397.428 153.281 395.511 155.585 393.759C158.228 391.958 161.438 391.165 164.638 391.525C167.838 391.885 170.818 393.373 173.042 395.722C175.379 397.98 176.818 401.006 177.087 404.23C177.356 407.453 176.436 410.65 174.502 413.215C173.081 415.086 171.496 416.823 169.763 418.408L40.002 544.575H-0.000305176ZM134.872 544.575H94.1152L116.448 522.861C124.12 515.402 133.019 515.035 138.927 521.112C140.234 522.745 141.204 524.62 141.778 526.626C142.353 528.632 142.52 530.728 142.271 532.79C142.022 534.853 141.361 536.84 140.327 538.633C139.294 540.427 137.909 541.99 136.254 543.231L134.872 544.575ZM232.778 544.575H192.022L224.097 513.388C226.244 510.975 228.866 509.032 231.801 507.676C234.403 506.223 237.452 505.764 240.388 506.384C243.325 507.003 245.951 508.66 247.784 511.049C249.922 513.174 251.244 515.982 251.513 518.97C251.782 521.959 250.981 524.934 249.254 527.363C247.326 530.244 245.041 532.867 242.452 535.17L232.778 544.575ZM449.862 348.098C450.185 347.898 450.491 347.671 450.776 347.419L450.87 347.516C457.684 359.89 461.055 373.837 460.627 387.885C460.199 401.932 455.989 415.56 448.439 427.332C447.832 428.067 447.288 428.83 446.793 429.525L446.681 429.682L446.59 429.809L446.376 430.017L446.162 430.225C445.061 431.852 443.816 433.375 442.443 434.778L348.051 526.556L348.053 526.249C348.007 524.27 348.11 522.291 348.362 520.331C353.421 490.718 358.042 464.035 362.891 437.037C363.403 433.914 364.743 430.995 366.772 428.582L448.461 349.155C448.825 348.84 449.219 348.559 449.636 348.317L449.862 348.098ZM308.044 204.168C310.994 205.32 313.861 206.678 316.624 208.232L316.635 208.244L296.76 227.569C293.209 231.022 289.549 234.612 286.03 238.064C282.771 241.261 279.632 244.34 276.813 247.081L274.91 248.932L273.521 250.294C260.715 262.859 247.513 275.813 234.304 288.272C231.855 290.956 228.617 292.795 225.046 293.529C211.784 295.485 198.479 297.436 185.131 299.382L181.504 299.912L179.685 300.183C165.876 302.187 152.067 304.214 138.387 306.233C138.045 306.214 137.715 306.184 137.303 306.14L137.244 306.08C136.268 305.962 135.282 305.955 134.307 306.057C134.387 305.943 134.458 305.823 134.528 305.704C134.644 305.507 134.755 305.317 134.904 305.172L135.058 305.022C135.707 303.958 136.458 302.961 137.301 302.046L160.079 279.899L165.574 274.556C183.809 256.686 202.686 238.214 221.725 220.1C232.651 208.907 246.787 201.377 262.224 198.527C277.661 195.678 293.654 197.647 308.044 204.168ZM411.108 265.639C410.993 262.385 409.758 259.259 407.612 256.787L407.192 256.307C404.87 253.984 401.812 252.546 398.558 252.247C395.303 251.947 392.061 252.804 389.401 254.669C387.649 255.651 386.091 256.943 384.804 258.483L383.46 259.79L290.792 349.891L252.385 310.39L259.188 303.775C276.636 286.811 294.358 269.688 311.654 252.976L311.656 252.975L311.657 252.974L312.05 252.594C314.324 250.397 316.59 248.207 318.847 246.026L320.424 244.503L320.426 244.502L320.429 244.499L320.429 244.499L320.434 244.494C359.154 207.101 399.159 168.466 437.946 129.968C468.512 100.236 504.709 76.8937 544.465 61.2755C564.906 53.3611 586.34 46.7526 607.146 40.3794L607.453 40.2911C610.847 39.2162 614.309 38.1386 617.775 37.0594L617.795 37.0532L617.804 37.0504L617.822 37.0449L617.831 37.042C620.292 36.2761 622.754 35.5094 625.197 34.7423C627.188 34.0785 629.238 33.5977 631.32 33.306C631.461 33.2796 631.607 33.2527 631.758 33.2252C631.925 33.1948 632.098 33.1637 632.276 33.1315L632.277 33.1313C633.378 32.9328 634.698 32.6949 636.142 32.363C626.841 67.9008 614.267 102.465 598.582 135.616C582.88 168.491 561.514 198.297 535.451 223.682L346.631 407.273L310.575 370.19L402.327 280.98C404.45 279.014 406.427 276.896 408.243 274.642C410.211 272.073 411.223 268.892 411.108 265.639ZM462.642 203.297L462.116 202.755C453.025 193.222 447.974 180.556 448.041 167.457C448.108 154.359 453.286 141.863 462.472 132.633C471.976 123.715 484.629 118.901 497.734 119.218C510.84 119.535 523.363 124.957 532.635 134.329L533.15 134.859C537.799 139.727 541.451 145.456 543.896 151.715C546.341 157.975 547.53 164.641 547.396 171.332C547.347 177.744 546.032 184.068 543.528 189.941C541.023 195.815 537.378 201.123 532.801 205.559C528.102 209.95 522.572 213.36 516.528 215.593C510.484 217.826 504.046 218.839 497.581 218.574C484.434 218.247 471.883 212.759 462.642 203.297ZM513.315 153.559C509.223 149.375 503.656 146.966 497.838 146.862C492.019 146.758 486.424 148.966 482.278 153.003C478.333 157.181 476.16 162.735 476.208 168.516C476.257 174.297 478.524 179.864 482.54 184.067C486.776 188.175 492.431 190.481 498.297 190.491C501.165 190.512 504 189.951 506.632 188.841C509.263 187.731 511.636 186.095 513.606 184.033C517.466 179.927 519.588 174.477 519.534 168.808C519.48 163.139 517.254 157.681 513.315 153.559Z"
                fill="#FB8958"
                stroke="#FB8958"
                strokeWidth="1.6"
                strokeDasharray="5"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;

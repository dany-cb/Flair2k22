/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { motion, useAnimation, AnimationControls } from 'framer-motion'
import { useNavigate, NavigateFunction } from 'react-router-dom'
import Woodsprite from '../assets/images/Woodsprite.png'

import events from '../utils/events'
import mq from '../utils/mq'

const BgSvg = ({
  controls1,
  controls2,
}: {
  controls1: AnimationControls
  controls2: AnimationControls
}) => {
  return (
    <div
      css={css`
        padding-top: 10px;
        padding-bottom: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;

        svg {
          position: absolute;
          z-index: 1;
          width: 350px;
          height: auto;
          --mt: 60px;
        }

        // ${mq['lg']} {
        //   svg {
        //   }
        // }
      `}
    >
      <svg
        css={css`
          stroke: var(--d-blue);
          text-align: center;
        `}
        width="153"
        height="490"
        viewBox="-48 180 260 490"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={controls1}
          d="M56.6776 455.798C77.065 475 101.447 463.799 111.09 455.798L100.414 461.711C96.3964 449.536 88.6363 426.02 89.7383 429.36C91.1159 433.534 91.8046 436.317 97.6591 436.317C102.343 436.317 104.202 431.679 104.547 429.36C104.776 426.693 103.72 421.08 97.6591 419.967C91.598 418.854 89.8531 423.91 89.7383 426.577C85.8353 428.896 78.0293 432.142 78.0293 426.577C78.0293 421.011 73.4375 419.851 71.1416 419.967C64.254 419.132 63.2208 425.881 63.5652 429.36C63.9096 431.563 65.907 436.039 71.1416 436.317C76.3763 436.595 77.9145 431.795 78.0293 429.36C93.7332 412.105 85.7205 395.268 79.7512 389.007C40.0783 395.686 43.9354 424.489 50.823 438.056C34.8437 451.693 44.165 469.248 50.823 476.322C78.9247 497.472 107.072 485.134 117.633 476.322C132.786 456.563 123.947 442.579 117.633 438.056C132.511 401.6 101.103 390.166 83.5394 389.007V333L83.5 230.5C85.8333 229.333 89.1 224.9 83.5 216.5C77.9 208.1 81.1667 205.333 83.5 205C91.8333 201.333 102.9 190.2 80.5 175C73.7799 170.44 69.6218 165.856 67.251 161.515M75.5 0V26L78.5 23C78.3333 26 78.8 31.3001 82 28.5C85.5706 25.5786 92.6184 16.9674 92.9851 5.43661M92.9851 5.43661C92.995 5.1265 93 4.81428 93 4.5C92.9941 4.80222 92.9891 5.11483 92.9851 5.43661ZM92.9851 5.43661C92.8775 14.165 93.528 29.6574 97 28.5C99 28.5 104.1 27.0001 108.5 21C105.833 25.3334 102.1 33.9001 108.5 33.5C110.802 34.7658 116.265 34.8558 123.772 29.1287M123.772 29.1287C127.138 26.5611 130.914 22.8243 135 17.5C131.361 19.7619 126.133 24.1243 123.772 29.1287ZM123.772 29.1287C122.132 32.6056 121.876 36.3925 124.5 40C126.333 42 131.8 45.8001 139 45C134.833 48 127.6 54.9001 132 58.5C136.4 62.0999 144.167 63 147.5 63C141.833 64 130.8 67.3001 132 72.5C133.06 77.0923 143.037 81.5027 149.602 83.7336M149.602 83.7336C150.471 84.0287 151.279 84.2858 152 84.5C151.267 84.2333 150.46 83.973 149.602 83.7336ZM149.602 83.7336C141.88 81.579 130 81.1201 130 93C130 102.222 133.417 105.799 136.67 106.832M136.67 106.832C138.073 107.278 139.445 107.251 140.5 107C139.403 106.912 138.046 106.843 136.67 106.832ZM136.67 106.832C132.818 106.802 128.821 107.232 130 109C130.645 110.842 132.073 113.914 134.166 116.768M134.166 116.768C135.862 119.079 137.994 121.247 140.5 122.5C144 123.667 149.4 124.8 143 120C140.555 118.167 137.401 117.199 134.166 116.768ZM134.166 116.768C128.932 116.071 123.487 116.779 120.5 117.5C117.667 118.333 114.7 122.3 125.5 131.5C115.833 127.333 98.9 122.6 108.5 137C104.5 135 97.3 133.9 100.5 145.5C100.752 146.697 100.942 148.462 100.843 150.366M100.843 150.366C100.681 153.499 99.7364 157.01 97 159C93.2143 161.753 79.7802 161.99 70.9014 161.683M100.843 150.366C102.597 159.593 97.7543 165.466 94.5 167.5C91.7 171.5 84 170.167 80.5 169C76.7245 169.378 72.6638 164.994 70.9014 161.683M100.843 150.366C100.441 148.252 99.6932 145.961 98.5 143.5C98.0429 142.557 97.545 141.693 97.0125 140.902M70.9014 161.683C69.5653 161.637 68.3324 161.579 67.251 161.515M70.9014 161.683C70.3298 160.61 70 159.649 70 159C70 156.35 70 157 71.5 155C72.7 153.4 88 153.667 95.5 154C98 151.5 94 150 93 148C92 146 73 149 70 148C67.6 147.2 69 144 70 142.5H82C82.1709 139.766 82.3689 136.635 82.5838 133.286M67.251 161.515C67.1664 161.51 67.0827 161.505 67 161.5C65.6667 160.667 63.1 154.3 63.5 135.5C64.6667 133.833 61 131 37 133C46.5 128.333 58.9 118.2 32.5 115C41.6667 110.833 48.1 101 0.5 95C23.6667 93.1667 59.1 86.4 15.5 74C30.5527 73.6763 51.7357 68.6055 19.9732 51.0942M67.251 161.515C61.7191 151.387 65.9167 142.583 70 138.5C70 137.888 70.4794 137.195 71.3202 136.518M19.9732 51.0942C19.0294 50.5738 18.0388 50.0425 17 49.5C17.9381 50.036 18.936 50.5731 19.9732 51.0942ZM19.9732 51.0942C31.8355 57.0533 48.8281 60.9095 40 37C47.3333 42.3334 59.8 45.3001 51 14.5C56.8333 22.3334 69.2 36.1001 72 28.5C74.8 20.8999 78.8333 33 80.5 40C75 37.8334 63.3 36.7001 60.5 49.5L61.8143 52.5667M61.8143 52.5667L62 53C61.9495 52.8611 61.8877 52.7156 61.8143 52.5667ZM61.8143 52.5667C60.9195 50.7502 58.306 48.4122 53.5 51C47 54.4999 46.5 65.0001 47 66C47.3683 66.7365 49.4603 68.66 50.7003 69.7408M50.7003 69.7408C50.8071 69.8339 50.9075 69.9207 51 70C50.9133 69.9133 50.8131 69.8259 50.7003 69.7408ZM50.7003 69.7408C49.5116 68.8447 46.9226 68.2121 44 71.5C40.8 75.0999 41.6667 83 42.5 86.5C42.6756 87.027 43.2215 87.8594 44.284 88.5875M44.284 88.5875C45.2377 89.2412 46.6078 89.8108 48.5 90C47.372 89.06 45.6079 88.0989 44.284 88.5875ZM44.284 88.5875C43.2604 88.9653 42.5 90.2095 42.5 93C42.5 101 46 109 51 109C51.8333 114.5 55.5 125.2 63.5 124C63.8333 126.167 65.6 131 70 133C70.0557 133.279 70.2419 133.561 70.6146 133.694M70.6146 133.694C71.3565 133.958 72.8375 133.63 75.5 131.5C79.5 128.3 74.8333 130.167 72 131.5C71.4917 132.008 70.8948 132.814 70.6146 133.694ZM70.6146 133.694C70.3125 134.642 70.3784 135.677 71.3202 136.518M71.3202 136.518C71.5099 136.687 71.7351 136.849 72 137C74.8 138.6 77.5 137.667 78.5 137C78.9585 136.041 79.3941 134.805 79.6519 133.453M71.3202 136.518C72.9854 135.177 76.0683 133.901 79.6519 133.453M79.6519 133.453C80.4248 129.399 79.5991 124.3 73 122.5C62 119.5 59 122 60.5 113C61.7 105.8 64.6667 106 66 107C67.5 106.667 71 107.4 73 113C75.5 108.833 78.4 99.7001 70 96.5C68.1667 99.3334 63.4 104.9 59 104.5C53.5 104 47 100 47 96.5C47 93.7 49.6667 93 51 93L58 96.5L60.5 93C58.6667 90.6667 54.2 85.7001 51 84.5C49.5 82.3333 47.9 77.2 53.5 74C59.1 70.8 60.5 78 60.5 82C60.6667 84.3334 63.2 88.5001 72 86.5C80.8 84.4999 76.6667 74 73.5 69C71.8137 69 69.5165 69.1515 67.41 69.5722M79.6519 133.453C80.0883 133.399 80.5321 133.356 80.9817 133.328M67.41 69.5722C64.1036 70.2327 61.267 71.5567 62 74C63.2 77.9999 66.1667 77.6667 67.5 77C68.6329 75.4894 69.7088 72.3816 67.41 69.5722ZM67.41 69.5722C66.6652 68.662 65.5662 67.7831 64 67C56 62.9999 50.5 62.5001 59 58.5C63.6667 59 72.8 59.4001 72 57C72.3411 56.3518 72.7228 55.55 73.0901 54.6675M73.0901 54.6675C74.5171 51.2385 75.7269 46.5907 73.5 45C70.7 42.9999 70 46.1667 70 48C70.8318 49.7191 71.9515 52.1098 73.0901 54.6675ZM73.0901 54.6675C75.3735 59.7969 77.7331 65.5978 78 68C78.5 72.5 79 89.5 80.5 93C79 96.6667 76.2 104.3 77 105.5C78 107 81.2161 118.5 80.5 124C80.1577 126.629 80.4962 130.222 80.9817 133.328M80.9817 133.328C81.3088 135.421 81.7027 137.292 82 138.5L82.0794 133.286M80.9817 133.328C81.3441 133.305 81.7103 133.291 82.0794 133.286M82.0794 133.286L83.5 40C87.8333 37.6667 99.3 35.4 110.5 45C121.7 54.6 124.5 64.3333 124.5 68C125.833 74 127.2 88.1 122 96.5C116.8 104.9 110.833 114 108.5 117.5C105.178 121.32 98.2475 131.331 97.0125 140.902M82.0794 133.286C82.247 133.284 82.4151 133.284 82.5838 133.286M97.0125 140.902C97.0083 140.934 97.0041 140.967 97 141C93.5 141.833 85.9 143 83.5 141C81.1 139 87.1667 138.5 90.5 138.5L89.6338 134.71M97.0125 140.902C94.9526 137.841 92.3743 135.877 89.6338 134.71M89.6338 134.71L86.5 121C86.5 119 86.9 115 88.5 115C90.1 115 87.1667 113 85.5 112C88.0899 105.71 92.9247 94.7664 96.2364 89.5001M89.6338 134.71C87.3279 133.729 84.9072 133.313 82.5838 133.286M96.2364 89.5001C97.4002 87.6495 98.3759 86.5 99 86.5C101.167 85.3333 105.8 83.7 107 86.5C108.2 89.3 103.167 90 100.5 90C99.3119 89.8727 97.8148 89.7 96.2364 89.5001ZM96.2364 89.5001C91.6155 88.9149 86.2982 88.0963 86 87.5C85.6586 86.8172 83.8359 113.769 82.5838 133.286"
          stroke="#004D9B"
          strokeWidth="2"
        />
      </svg>

      <svg
        css={css`
          margin-top: 30rem;
        `}
        width="253"
        height="3778"
        viewBox="0 0 253 3778"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={controls2}
          d="M84.215 73.9085C83.2913 75.1733 80.474 76.9439 76.5944 73.9085C71.745 70.1144 68.9738 53.5581 72.7841 49.0741C74.1697 44.5902 78.8806 37.5537 86.6398 45.28L94.6068 65.9753C90.2192 54.9378 86.9169 32.3109 108.809 30.1034C112.619 30.1034 121.348 32.3109 125.782 41.1409C127.976 37.0019 134.095 28.9997 141.023 30.1034C150.029 30.5633 165.686 38.3816 156.264 65.9753C159.036 59.0769 164.647 45.28 164.924 45.28C165.271 45.28 165.617 42.5206 170.12 41.1409C172.198 40.4511 177.048 41.072 179.819 49.0741C181.32 54.8228 182.59 67.8379 175.662 73.9085C174.392 75.0583 171.159 77.0128 168.388 75.6331C170.813 87.8204 166.102 112.954 127.86 115.989V126.5C104.74 127.167 58.7 115.4 59.5 63C60.3 10.6 104.021 0.499997 125.782 2C147.855 1.16666 191.2 12.2 188 63C184.8 113.8 146.574 128.833 127.86 130V472.5L106.5 479.5C106 479.5 104.9 480.2 104.5 483C104.1 485.8 100.333 521.833 98.5 539.5C98.3333 540.167 98.5 541.6 100.5 542C102.5 542.4 146.333 542.167 168 542C169 541.5 171.1 539.7 171.5 536.5C171.9 533.3 175.667 485.5 177.5 462L171.5 465L108 483L103 527.5L168 522.5L171.5 467H175L170 527.5L129.5 531V535C128.5 535.833 127 537.6 129 538C131 538.4 137.5 540.5 140.5 541.5C141.5 543 143 547.3 141 552.5C141 553 140.2 554.1 137 554.5C133.8 554.9 125.333 556 121.5 556.5V560.5L116 564C115.5 564.333 115.2 565 118 565H122.5L124 560.5C130.333 558.5 143.4 556.1 145 562.5L142 565H124C127.833 563 136.6 559.5 141 561.5C145.4 563.5 146.167 560 146 558C151.167 557.833 161.3 556.5 160.5 552.5C159.7 548.5 158.5 544.833 158 543.5H171.5C172.667 543 175 541.2 175 538C175 534.8 178 484.667 179.5 460C178.667 459.333 175.9 458.4 171.5 460L131.5 471.5C125.5 479.333 115.1 498.6 121.5 513C129.5 531 139.721 571.5 127.86 589.5C116 607.5 127.86 556 127.86 599C127.86 633.4 127.86 658.667 127.86 667 V 922.5 L 177.5 917.5 C 182.5 917.833 192.8 919.8 194 925 C 195.2 930.2 201.167 946.5 204 954 L 177.5 958 C 174 946.167 165.7 922.5 160.5 922.5 C 155.3 922.5 167.667 921.167 174.5 920.5 C 178 924.167 185.9 936.8 189.5 958 L 118.5 968 C 114.833 955.333 106.9 929.8 104.5 929 C 102.1 928.2 113.5 927 119.5 926.5 C 120.833 928.167 125.6 938 134 964 L 101 970.5 L 90 933.5 C 87.6666 932.333 82.8 930.2 82 931 C 81 932 86.5 927.392 126.5 923 C 112.333 924.333 83.3 927.7 80.5 930.5 C 77.7 933.3 75.6666 948 75 955 L 77.5 970.5 L 104.5 987 L 117.5 985.143 L 143 981.5 C 144.667 979.5 149 976.4 153 980 C 156 978.333 162.2 975.5 163 977.5 C 164 980 160.5 983 160.5 984 C 160.5 985 163 999 153 999.5 C 145 999.9 143.667 992 144 988 C 144.167 986 144.1 982.1 142.5 982.5 C 140.9 982.9 145.5 979.333 148 977.5 C 148.833 974.167 151.3 967.7 154.5 968.5 C 156.333 968 160 968.8 160 976 C 160 983.2 164 980 166 977.5 L 202 971.5 L 205 956.5 L 195.5 1010.5 L 104.5 1029 L 84.5 1012 L 77.5 971.5 C 102.167 970.5 151.8 971.3 153 982.5 C 154 982 155.7 983.4 154.5 993 C 152.833 993.667 150 992.8 152 984 C 154 975.2 140.5 980.333 133.5 984 L 132.5 1022 L 116.5 1026 L 117.5 985.143 L 104 988 L 104.5 1034 C 97.6666 1045.17 80.8 1061.5 68 1037.5 C 52 1007.5 167.5 886.5 209.5 923 C 243.1 952.2 168.167 1015.5 126.5 1043.5 C 124.047 1044.83 120.012 1049.4 123.5 1057 C 127.86 1066.5 159.5 1050.5 143 1049 C 126.5 1047.5 109.5 1064.5 116.5 1069.5 C 118.333 1071.83 124.1 1076.3 132.5 1075.5 C 143 1074.5 140 1067.5 137.5 1066 C 135 1064.5 126.5 1063 126.5 1081.5 V 1410.5 V1473.5C124.667 1468.33 120.1 1457.8 116.5 1457C112.9 1456.2 98.6666 1443.33 92 1437C92.5 1440.33 94.3 1447.6 97.5 1450C101.5 1453 106.5 1456 106.5 1458C106.5 1460 92 1450 92 1450C92 1450 81.6 1444.2 78 1439C73.5 1432.5 79.5 1454.5 94 1457C84.3333 1451.83 64.7 1440.6 63.5 1437C62 1432.5 71.5 1453 78 1455C84.5 1457 53 1444.5 48 1430C47.1666 1443.33 50.5 1473.9 70.5 1489.5C77.8333 1494.33 95.9 1503.1 109.5 1499.5C109.167 1500.67 107.4 1503 103 1503C97.5 1503 74 1493.5 70.5 1491C68 1490.67 63.5 1491.1 65.5 1495.5C67.5 1499.9 72 1499.33 74 1498.5C71 1498.17 65.3 1498.3 66.5 1501.5C68 1505.5 78 1510 85 1510C92 1510 102.5 1508.5 110.5 1501.5C118.5 1494.5 121 1489.5 126 1489.5C131 1489.5 133.5 1488.5 138 1493.5C142.5 1498.5 146 1505 153.5 1507.5C161 1510 176.5 1512 180 1507.5C183.333 1505.5 188.1 1501.4 180.5 1501C183.5 1498.67 188.9 1493.9 186.5 1493.5C180.5 1496.67 166.4 1502.8 158 1502C155 1502.17 148.6 1502.2 147 1501C154.833 1502 172.8 1502 182 1494C189.667 1487.83 205 1466.8 205 1432C200.167 1438.67 189 1452.6 183 1455C185.833 1449.67 191.1 1438.3 189.5 1435.5L169 1458C172 1452.5 177.6 1440.3 176 1435.5C174.667 1440.5 168.1 1452 152.5 1458C155 1454.17 159.6 1444.8 158 1438C154.877 1443.67 146.005 1455.9 135.5 1459.5C133.333 1460.17 129.1 1462.7 129.5 1467.5C131.5 1468.53 134.9 1472.46 132.5 1480C130.1 1487.54 135.167 1485.47 138 1483.5C139.5 1480.17 143.4 1473.5 147 1473.5C149 1473 154.5 1472.6 160.5 1475C164.333 1475.17 172.1 1474.8 172.5 1472C170.5 1478 163.2 1490.4 150 1492C147.667 1493.17 142.3 1493.5 139.5 1485.5C136.7 1477.5 126 1480.83 121 1483.5C118.167 1484.33 112.2 1484.9 111 1480.5C109.5 1475 86 1469 79.5 1472C73 1475 88 1489.5 95.5 1489.5C100.333 1490.5 110.1 1491.1 110.5 1485.5C111 1478.5 119 1468.56 122.5 1475C125.3 1480.15 126.5 1516 126.5 1516C127 1535.67 140.7 1564.7 191.5 1523.5C242.3 1482.3 225.667 1442.33 211 1427.5C189.833 1405.33 123.2 1374.3 26 1427.5C5.49998 1436 -21.3 1464.4 35.5 1510C106.5 1567 157 1562.5 166.5 1559.5C176 1556.5 236 1508.5 118.5 1523.5C24.5 1535.5 84.3333 1574.5 126 1592.5V1878.5V2035.5H251.5H11.5V1878.5C15.8333 1926 32.1 2021.4 62.5 2023H71.5L88.5 1971.5L120.5 1984L136 1939L170 1964.5L193.5 1927.5C192.167 1925.5 188.6 1921.5 185 1921.5C181.4 1921.5 201.167 1910.5 211.5 1905L214 1934L206 1930L176.5 1977.5L140.5 1953L123.5 1995.5L91.5 1981L77.5 2023C159.167 2006.33 304.3 1983 231.5 2023C158.7 2063 108 2050 118 2026.5C120.333 2019.44 126.1 2009.57 130.5 2026.5C134.9 2043.43 127.667 2053.56 123.5 2056.5V2367.5C167.5 2401.33 204.6 2480.7 179 2527.5C153.4 2574.3 191 2563 194 2560C194.167 2559 193.9 2557 191.5 2557C188.5 2557 172.5 2562 163.5 2557C154.5 2552 150.5 2547.5 150.5 2542C150.167 2538.5 152.398 2532.17 154.5 2527.5C159 2517.5 165 2497.5 159 2489C157.167 2486.83 153.1 2482.4 151.5 2482C149.5 2481.5 148 2476 150.5 2475.5C151.333 2474.33 153.6 2473 156 2477C159 2482 159.5 2487.5 151.5 2479.5C145.1 2473.1 135.833 2466.17 132 2463.5C133 2461 135.3 2456.2 136.5 2457C137.7 2457.8 133 2460 130.5 2461C125.833 2456.5 129 2461 113 2448.5C110.307 2446.4 99.1667 2438.17 94.5 2435C94.5 2434.33 94.7 2432.8 95.5 2432C96.5 2431 100.5 2425 104.5 2423C107.7 2421.4 104.167 2421 102 2421C98.8333 2423.33 92.6 2428.8 93 2432C93.4 2435.2 90.8333 2436 89.5 2436C83.3333 2433.83 71.3 2427.2 72.5 2418C71.8333 2414.83 71.8 2407.9 77 2405.5C79.6667 2403.33 86.4 2399.9 92 2403.5C94.8333 2404.67 101 2408.1 103 2412.5C103.667 2413 105.5 2415.2 107.5 2420C109.5 2424.8 108 2424 107 2423V2425L115.5 2433L133.5 2451C133 2453.33 131.7 2458 130.5 2458C129 2458 128.5 2458 129 2456C129.4 2454.4 133.5 2453.33 135.5 2453L151.5 2470.5L163.5 2486C166.167 2490.5 170.7 2501.5 167.5 2509.5C163.5 2519.5 140 2539.5 123.5 2535.5C113.833 2535.83 94 2530.4 92 2506C92.1693 2496.33 100.106 2479.4 130.5 2489C139.167 2493.67 151.3 2506.9 130.5 2522.5C109.7 2538.1 117.167 2557 123.5 2564.5L131.5 3085.5C132.667 3092.33 132.9 3107.2 124.5 3112C120.5 3115.17 111.9 3121.6 109.5 3122C108.167 3123.33 104.4 3125.2 100 3122C100 3124.33 101.9 3129 109.5 3129C112.667 3129 120.1 3127.6 124.5 3122C128 3119.67 135.7 3115.7 138.5 3118.5C142.833 3119.17 150.6 3124.5 147 3140.5L143 3157.5C143.333 3159.17 145.8 3161.8 153 3159C149.667 3156.83 141.5 3154.4 135.5 3162C134.667 3163.17 132.6 3166.4 131 3170C132 3164.5 133.2 3152.3 130 3147.5C128.833 3145 126 3141.1 124 3145.5C121.833 3149 117 3156.6 115 3159C110.5 3159 101.4 3159.3 101 3160.5C97.3333 3154.83 89 3143.9 85 3145.5C84.5 3150.33 84.1 3160.8 86.5 3164C86 3166.5 85.5 3172.1 87.5 3174.5C86.6667 3179.33 86.5 3189.6 92.5 3192C94.3333 3194 99.2 3196.8 104 3192C107.5 3194 115.9 3196.6 121.5 3191C125.333 3190 132.6 3184.8 131 3172C132 3178.67 133.7 3192.8 132.5 3196C132.5 3199.17 131.4 3206.1 127 3208.5C123.667 3210.67 117 3217 117 3225C117 3235 120 3242.5 118.5 3246.5C117 3250.5 113.5 3263 113.5 3266C113.167 3269 111.8 3276 109 3280C105.5 3285 104.5 3286.5 105 3289C105.4 3291 107.833 3291.17 109 3291C109.5 3291 110.7 3289.9 111.5 3285.5C109.167 3286.67 105.4 3290.1 109 3294.5C112.6 3298.9 115.833 3295.33 117 3293C117.333 3291.33 117.8 3287.9 117 3287.5C116.2 3287.1 115.333 3291 115 3293C115.5 3294 117.1 3295.4 119.5 3293C120.333 3292.33 121.9 3289.6 121.5 3284C122.333 3281 124.4 3274.4 126 3272L138.5 3244.5L140 3231C140.333 3229.33 142.3 3225.1 147.5 3221.5L144 3255.5C143.667 3257.83 142.1 3262 138.5 3260C138 3258.83 137.6 3256 140 3254C141.242 3255.33 142.182 3258.9 136 3262.5C133 3261.5 127.2 3262.2 128 3273C128.8 3283.8 125.667 3283.83 124 3282.5C122.667 3283 119.7 3281.6 118.5 3272C116.333 3267 111.9 3255.9 111.5 3251.5C110.667 3249.33 108.5 3244.4 106.5 3242C104 3239 99.5 3224.5 99.5 3216.5C99.5 3210.1 101.833 3217.17 103 3221.5C102.667 3218.83 101.3 3212.5 98.5 3208.5C96.6667 3205.67 93.2 3199.2 94 3196C94.8 3192.8 100.333 3194.67 103 3196C106 3194.17 113.5 3191.6 119.5 3196C126.833 3196.83 141.2 3203.8 140 3225C139.833 3226 141.4 3228.9 149 3232.5C148.5 3235.5 147.5 3241.8 147.5 3243C147.5 3244.5 145.5 3258.5 146.5 3260C145.5 3262 143.7 3266.6 144.5 3269C144.5 3270.33 144.7 3273 145.5 3273C146.5 3273 148 3273 148 3271C148 3269 148.5 3267 148 3267C147.5 3267 146.5 3272.5 149 3273C151 3273.4 151.833 3271.83 152 3271C152.5 3269.17 153.2 3265.4 152 3265C150.5 3264.5 152 3272 153 3272C154 3272 156.5 3273.5 157.5 3271C158 3269 158.9 3264.8 158.5 3264C158 3260 157.1 3251.9 157.5 3251.5C158 3245.83 159.4 3233.5 161 3229.5C161.833 3227 163.4 3221.2 163 3218C163 3212.83 163.8 3201.1 167 3195.5C168.5 3189.5 168.8 3174.4 158 3162C157.833 3162 157.5 3161.4 157.5 3159C157.5 3156 164 3117.5 151 3113C140.6 3109.4 130.667 3111.5 127 3113C86.5 3111 11 3120.5 33 3174.5C47.6667 3191.83 75.2 3234.2 68 3265C60.8 3295.8 65 3333.17 68 3348C95 3405.83 144.1 3573 124.5 3607C97 3609 42.2 3631 43 3703C46.1667 3728.83 66.9 3779.7 124.5 3776.5C196.5 3772.5 212 3711.5 211.5 3703C211 3694.5 218 3612.5 124.5 3612.5C92.3333 3616.17 33.3 3644.3 54.5 3727.5C60.3333 3725.67 72.3 3724.7 73.5 3735.5C77.6667 3729.17 89.5 3720.3 103.5 3735.5C105.833 3729.33 114.8 3720.7 132 3735.5C134.833 3729.5 144.3 3721.1 159.5 3735.5C163.5 3729.5 174.7 3721.1 187.5 3735.5C186.167 3733.83 186.7 3729.9 199.5 3727.5H183.5L167.5 3710L148 3724.5L103.5 3682.5C94.8333 3688 81.1 3704.1 95.5 3724.5C109.9 3744.9 125.833 3729 132 3718.5L179 3674C176.167 3681.33 173.1 3697.4 183.5 3703C193.9 3708.6 168.5 3686 154.5 3674C158.333 3673 163.7 3674.9 154.5 3690.5C145.3 3706.1 130.667 3715.67 124.5 3718.5C117.5 3717 103.5 3710 103.5 3694C103.5 3674 99.5 3743.5 73.5 3741.5C47.5 3739.5 124.5 3736 124.5 3746C133.833 3741.67 157.2 3735.6 176 3746C194.8 3756.4 147.5 3760.67 121.5 3761.5C112.167 3763.33 92.1 3764.9 86.5 3756.5C80.9 3748.1 103.167 3748.67 115 3750C116.833 3752.17 117.1 3756.5 103.5 3756.5"
          stroke="url(#paint0_linear_48_77)"
          stroke-width="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_48_77"
            x1="123.829"
            y1="1.86191"
            x2="126"
            y2="3828.99"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0628104" stopColor="#004D9B" />
            <stop offset="0.196332" stopColor="#00E132" />
            <stop offset="0.291667" stopColor="#ECE300" />
            <stop offset="0.390625" stopColor="#EC2A00" />
            <stop offset="0.520833" stopColor="#00DE16" />
            <stop offset="0.639975" stopColor="#9D00D5" />
            <stop offset="0.760417" stopColor="#581679" />
            <stop offset="0.85795" stopColor="#C35D00" />
            <stop offset="0.978676" stopColor="#001AFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
type CardsProps = {
  sNo: number
  title: string
  description: string
  href: string
  navigate: NavigateFunction
  controls1: AnimationControls
  controls2: AnimationControls
  className: string
}
const Card = (props: CardsProps) => {
  const animate = (path: number, dur: number) => {
    props.controls2.start({
      pathLength: path,
      transition: {
        duration: dur,
        delay: 0,
      },
    })
  }
  const svgDraw = () => {
    if (done) {
      return
    }
    done = true
    const dur = 3
    switch (props.sNo) {
      case 1:
        props.controls1.start({
          pathLength: 1,
          transition: {
            duration: dur / 2,
          },
        })
        props.controls2.start({
          pathLength: 0.065,
          transition: {
            delay: dur / 2,
            duration: dur / 2,
          },
        })
        break
      case 2:
        animate(0.148, dur)
        break
      case 3:
        animate(0.28, dur)
        break
      case 4:
        animate(0.43, dur)
        break
      case 5:
        animate(0.56, dur)
        break
      case 6:
        animate(0.63, dur)
        break
      case 7:
        animate(0.78, dur)
        break
      case 8:
        animate(0.89, dur)
        break
      case 9:
        animate(1, dur)
        break
    }
  }
  let done = false
  return (
    <motion.div
      viewport={{ once: true }}
      onViewportEnter={svgDraw}
      style={{
        ['--pos' as any]: props.sNo % 2 !== 0 ? 'flex-start' : 'flex-end',
      }}
      className={`bg-dark rounded-curve shadow-white p-md-5 p-4 d-flex justify-content-center align-items-start mr-card ${props.className}`}
      css={css`
        // position: relative;
        min-height: 150px;
        min-width: 250px;
        max-width: 500px;
        // background-color: var(--white);
        // padding: 30px 0 30px 50px;

        z-index: 5;
        ${mq['md']} {
          font-size: 1.2em;
          // padding: 30px 0 30px 60px;
        }

        ${mq['lg']} {
          // background-color: transparent;
          align-self: var(--pos);
          // padding: 30px 0 30px 70px;
        }
      `}
    >
      <div
        css={css`
          // position: absolute;
          // left: 0;
          // top: 25px;

          font-family: var(--font-sans);
          display: flex;
          flex-direction: column;
        `}
      >
        <span
          css={css`
            font-weight: bold;
            margin-top: 10px;
            &:after {
              content: '';
              display: block;
              height: 1px;
              width: 100%;
              background-color: var(--black);
            }
          `}
        >
          0{props.sNo}
        </span>
        <hr className="my-1" />
        <span>09</span>
      </div>
      <div className="ms-md-4 ms-2">
        <h1
          css={css`
            font-family: var(--font-sans);
            // font-size: 1.25em;
            margin-bottom: 15px;
            font-weight: bold;

            ${mq['lg']} {
              margin-bottom: 20px;
            }
          `}
          className="text-gradient fs-2"
        >
          {props.title}
        </h1>
        <p
          css={css`
            margin-bottom: 20px;
            // font-family: var(--font-text);
          `}
        >
          {props.description}
        </p>
        {/* <div
          css={css`
            border: 1px solid var(--d-blue);
            display: inline-block;
            background-color: var(--white);
            position: relative;
            margin-top: 10px;
            ${mq['lg']} {
              a {
                padding: 15px 45px;
              }
              margin-top: 15px;
            }
          `}
        > */}
        {/* <a
            onClick={() => {
              props.navigate(props.href)
            }}
            css={css`
              font-family: var(--font-serif);
              text-decoration: none;
              color: var(--d-blue);
              display: block;
              cursor: pointer;
              position: relative;
              padding: 10px 30px;
              width: 100%;
              height: 100%;
              z-index: 10;

              transition: color ease-out 0.3s;

              &:hover {
                color: var(--white);

                & + div {
                  transform: scaleY(1);
                  transform-origin: bottom center;
                }
              }
            `}
          >
            Learn More
          </a> */}

        {/* <div
            css={css`
              width: 100%;
              height: 100%;
              border-radius: inherit;
              top: 0;
              position: absolute;
              z-index: 1;
              transform: scaleY(0);
              transform-origin: top center;
              background-color: var(--d-blue);
              transition: transform cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
            `}
          ></div>
        </div> */}
        <button
          onClick={() => {
            props.navigate(props.href)
          }}
          className="btn btn-gradient rounded-pill px-3 py-1 mt-3 text-white"
        >
          More Info!
        </button>
      </div>
    </motion.div>
  )
}

const Events = () => {
  const navigate = useNavigate()
  const controls1 = useAnimation()
  const controls2 = useAnimation()

  return (
    <section
      css={css`
        width: 100%;
        padding: 40px 50px 0 50px;
        // color: var(--black);

        display: flex;
        flex-direction: column;
        align-items: center;
        // background-color: var(--white);
      `}
    >
      <h2
        css={css`
          font-family: var(--font-sans);
          display: inline-block;

          ${mq['lg']} {
            margin-bottom: 20px;
            margin-top: 40px;
          }

          // &:after {
          //   content: '';
          //   display: block;
          //   width: 100%;
          //   height: 1px;
          //   background-color: var(--orange);
          //   margin-top: 5px;
          // }
        `}
        className="h2 fw-bold"
        id="event-h"
      >
        Events
      </h2>
      <BgSvg controls1={controls1} controls2={controls2} />
      <div
        css={css`
          margin-top: 155px;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 4100px;
          justify-content: space-between;

          width: 100%;
          max-width: 1500px;

          ${mq['lg']} {
            height: 5700px;
          }
        `}
      >
        <div className="sprite1">
          <img
            src={Woodsprite}
            alt="avatar"
            className="img-fluid"
            style={{ width: '200px' }}
          />
        </div>
        <div className="sprite2">
          <img
            src={Woodsprite}
            alt="avatar"
            className="img-fluid"
            style={{ width: '200px' }}
          />
        </div>
        {events.map((event, index) => {
          return (
            <Card
              key={index}
              controls1={controls1}
              controls2={controls2}
              sNo={index + 1}
              title={event.title}
              description={event.description}
              href={event.href}
              navigate={navigate}
              className="nice"
            />
          )
        })}
      </div>
    </section>
  )
}

export default Events

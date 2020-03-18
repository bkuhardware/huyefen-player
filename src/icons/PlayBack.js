import React from 'react';
import Icon from '@ant-design/icons';

const PlayBackSvg = ({ size = "1em" }) => (
    <svg t="1584498351706" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14697" width={size} height={size}><path d="M309.1968 142.7712A418.8672 418.8672 0 0 1 512 90.8032c232.6528 0 421.1968 188.5696 421.1968 421.1968 0 232.6528-188.544 421.1968-421.1968 421.1968-232.6272 0-421.1968-188.544-421.1968-421.1968 0-37.9136 5.0688-74.7776 14.4384-109.7984l-75.4688-19.7888A498.4064 498.4064 0 0 0 12.8 512c0 275.7376 223.4624 499.2 499.2 499.2S1011.2 787.7376 1011.2 512 787.7376 12.8 512 12.8c-87.7568 0-170.1376 22.6048-241.792 62.3104L237.056 17.664l-30.8224 141.6704 138.0608 44.0576-35.0976-60.6208z" p-id="14698" fill="#ffffff"></path><path d="M408.3456 334.5408v348.0832h-53.1456V398.4128c-21.4272 20.1728-48.0512 34.7904-79.9488 43.8784V389.632c15.5904-3.8912 32.1792-10.7264 49.7152-20.48 17.5616-11.008 31.8976-22.6048 42.9312-34.6112h40.448zM499.328 334.5408h209.6128v46.7968H542.208l-10.2144 100.4288h1.4592a94.8736 94.8736 0 0 1 37.0432-23.8848c12.3904-5.1712 26.5984-7.808 42.9056-7.808 32.8704 0 59.4688 10.7264 79.9488 32.1792 20.7616 21.76 31.2064 51.2 31.2064 88.2432 0 35.7888-13.3632 65.1264-39.9872 88.2432-24.6528 20.4544-54.4 30.6944-89.216 30.6944-30.8992 0-57.728-8.576-80.4352-25.856-24.6784-18.5088-38.3232-44.0832-40.96-76.5184h52.1728c1.9456 19.7632 9.5232 34.6368 22.912 44.3648 11.6992 8.7552 27.2896 13.1584 46.7968 13.1584 21.1712 0 39.1936-6.6304 54.0928-19.9936 14.6432-13.6448 21.9392-31.4624 21.9392-53.6064 0-24.3968-6.3488-43.392-18.9952-57.0624-12.6976-13.6448-30.5152-20.48-53.6576-20.48-15.872 0-29.44 2.7392-40.448 8.2944-12.3904 5.5552-21.9392 14.8224-28.7488 27.776h-49.7408l19.0464-194.9696z" p-id="14699" fill="#ffffff"></path></svg>
);

export default ({ fontSize, ...restProps }) => <Icon {...restProps} component={() => <PlayBackSvg size={fontSize} />} />;
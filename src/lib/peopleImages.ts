import { StaticImageData } from 'next/image';

import noneImg from '@/assets/people/noneImg.png';

import arash from '@/assets/people/arash.jpg';
import bokchow from '@/assets/people/bokchow.png';
import braudt from '@/assets/people/braudt.jpg';
import brianlau from '@/assets/people/brianlau.jpg';
import carrieling from '@/assets/people/carrieling.png';
import changyingx from '@/assets/people/changyingx.jpg';
import eedxu from '@/assets/people/eedxu.jpg';
import eejlau from '@/assets/people/eejlau.jpg';
import eeshsong from '@/assets/people/eeshsong.jpg';
import eetsui from '@/assets/people/eetsui.png';
import eewswleung from '@/assets/people/eewswleung.png';
import eezxli from '@/assets/people/eezxli.png';
import egjac from '@/assets/people/egjac.jpg';
import erwinhuang from '@/assets/people/erwinhuang.jpg';
import hongrigu from '@/assets/people/hongrigu.jpg';
import joneja from '@/assets/people/joneja.png';
import ketfyee from '@/assets/people/ketfyee.jpg';
import larry from '@/assets/people/larry.jpg';
import lillyli from '@/assets/people/lillyli.jpg';
import lim from '@/assets/people/lim.jpg';
import mingmingfan from '@/assets/people/mingmingfan.jpg';
import mitchli from '@/assets/people/mitchli.jpg';
import qianzh from '@/assets/people/qianzh.jpg';
import qijiashao from '@/assets/people/qijiashao.jpg';
import ravindra from '@/assets/people/ravindra.jpg';
import saikit from '@/assets/people/saikit.png';
import scharffrbn from '@/assets/people/scharffrbn.jpeg';
import tracymok from '@/assets/people/tracymok.png';
import wenchaoxu from '@/assets/people/wenchaoxu.jpg';
import wenqi from '@/assets/people/wenqi.jpg';
import ybchan from '@/assets/people/ybchan.png';
import ylzi from '@/assets/people/ylzi.jpg';
import yuanly from '@/assets/people/yuanly.jpeg';
import ziqiw from '@/assets/people/ziqiw.jpg';
import songguo from '@/assets/people/songguo.jpg';
import lqyang from '@/assets/people/lqyang.jpeg';
import pengzhou from '@/assets/people/pengzhou.jpg';
type Img = StaticImageData | string;

export const peopleImages: Record<string, Img> = {
    'arash.jpg': arash,
    'bokchow.png': bokchow,
    'braudt.jpg': braudt,
    'brianlau.jpg': brianlau,
    'carrieling.png': carrieling,
    'changyingx.jpg': changyingx,
    'eedxu.jpg': eedxu,
    'eejlau.jpg': eejlau,
    'eeshsong.jpg': eeshsong,
    'eetsui.png': eetsui,
    'eewswleung.png': eewswleung,
    'eezxli.png': eezxli,
    'egjac.jpg': egjac,
    'erwinhuang.jpg': erwinhuang,
    'hongrigu.jpg': hongrigu,
    'joneja.png': joneja,
    'ketfyee.jpg': ketfyee,
    'larry.jpg': larry,
    'lillyli.jpg': lillyli,
    'lim.jpg': lim,
    'mingmingfan.jpg': mingmingfan,
    'mitchli.jpg': mitchli,
    'qianzh.jpg': qianzh,
    'qijiashao.jpg': qijiashao,
    'ravindra.jpg': ravindra,
    'saikit.png': saikit,
    'scharffrbn.jpeg': scharffrbn,
    'tracymok.png': tracymok,
    'wenchaoxu.jpg': wenchaoxu,
    'wenqi.jpg': wenqi,
    'ybchan.png': ybchan,
    'ylzi.jpg': ylzi,
    'yuanly.jpeg': yuanly,
    'ziqiw.jpg': ziqiw,
    'songguo.jpg': songguo,
    'lqyang.jpeg': lqyang,
     'pengzhou.jpg': pengzhou,
};

/**
 * Resolve a photo path from JSON to a static import that Next/Image can use.
 * Accepts values like:
 *  - "/src/assets/people/qianzh.jpg"
 *  - "/assets/people/qianzh.jpg"
 *  - "qianzh.jpg"
 */
export function resolvePersonPhoto(photo?: string): Img {
    if (!photo) return noneImg;
    // normalize: remove leading slashes and optional "src/" or "assets/" prefixes
    const cleaned = photo
        .replace(/^\/+/, '')
        .replace(/^src\//, '')
        .replace(/^assets\//, '');
    const name = cleaned.split('/').pop();
    console.log('Resolving photo:', photo, '->', cleaned, '->', name);
    if (!name) return noneImg;
    return peopleImages[name] ?? noneImg;
}

export default peopleImages;

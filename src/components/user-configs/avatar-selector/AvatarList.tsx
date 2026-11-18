import { useCallback, useEffect, useState } from "react";
import { nanoid } from "nanoid";

import type { AvatarFullConfig } from "react-nice-avatar";
import type { AvatarListItem } from "./AvatarListItem";

import ReactNiceAvatar, { genConfig } from "react-nice-avatar";

import "./avatar-selector.scss";

interface Props {
  selectConfig: (item: AvatarFullConfig) => void;
}

const DISPLAY_COUNT = 10;

const AvatarList = ({ selectConfig }: Props) => {
  const [current, setCurrent] = useState(0);
  const [avatarConfigList, setAvatarConfigList] = useState<AvatarListItem[]>(
    []
  );
  const listId = "avatarList";
  const [listWidth, setListWidth] = useState(0);

  const genConfigList = (count: number): AvatarListItem[] => {
    return new Array(count).fill(null).map(() => ({
      ...genConfig({ isGradient: Boolean(Math.round(Math.random())) }),
      id: "n_" + nanoid(),
    }));
  };

  const fetchListWidth = useCallback((count = 0) => {
    if (count > 20) return;
    const listElem = document.getElementById(listId);
    if (!listElem) {
      return setTimeout(() => {
        fetchListWidth(count + 1);
      }, 500);
    }

    setListWidth(listElem.offsetWidth);
  }, []);

  const changeCurrent = (deg: 1 | -1) => {
    const newCurrent = Math.max(current + deg, 0);
    setCurrent(newCurrent);
    if (newCurrent * DISPLAY_COUNT > avatarConfigList.length - 1) {
      const newConfigList = genConfigList(DISPLAY_COUNT);
      setAvatarConfigList(avatarConfigList.concat(newConfigList));
    }
  };

  const displayMax = (current + 2) * DISPLAY_COUNT;
  const displayMin = (current - 1) * DISPLAY_COUNT;

  useEffect(() => {
    setAvatarConfigList(genConfigList(DISPLAY_COUNT));
    fetchListWidth();
  }, [fetchListWidth]);

  return (
    <div className="flex items-center justify-center">
      {/* Arrow left */}
      {current !== 0 && (
        <i
          className="iconfont icon-arrow-right-filling-center transform rotate-180 mr-1 text-xl text-gray-500 transition hover:text-white cursor-pointer"
          onClick={() => changeCurrent(-1)}
        />
      )}

      {/* List */}
      <div id={listId} className="AvatarList overflow-x-hidden">
        <div
          className="listWrapper flex items-center py-3"
          style={{
            transform: `translateX(-${current * listWidth}px)`,
          }}
        >
          {avatarConfigList.map((item, idx) => {
            return (
              <div
                key={item.id}
                className="AvatarItemWrapper"
                onClick={selectConfig.bind(this, item)}
              >
                {idx >= displayMin && idx < displayMax && (
                  <ReactNiceAvatar className="AvatarItem" {...item} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Arrow right */}
      <i
        className="iconfont icon-arrow-right-filling-center ml-1 text-xl text-gray-500 transition hover:text-white cursor-pointer"
        onClick={() => changeCurrent(1)}
      />
    </div>
  );
};

export default AvatarList;

interface countdown {
  countdown: moment.Duration;
}
export default function Times({ countdown }: countdown) {
  return (
    <div className="flex items-end">
      {/* <Image src={time} alt="time" /> */}
      <div className="flex items-end gap-x-[18px]">
        <div>
          <div className="text-[12px]">Days</div>
          <div className="text-[32px]">
            <b>
              {countdown?.days().toString().length === 1
                ? "0" + countdown?.days().toString()
                : countdown?.days().toString()}
            </b>
          </div>
        </div>
        <div className="text-[32px] text-[#E07575]">:</div>
        <div>
          <div className="text-[12px]">Hours</div>
          <div className="text-[32px]">
            <b>
              {countdown?.hours().toString().length === 1
                ? "0" + countdown?.hours().toString()
                : countdown?.hours().toString()}
            </b>
          </div>
        </div>
        <div className="text-[32px] text-[#E07575]">:</div>
        <div>
          <div className="text-[12px]">Minutes</div>
          <div className="text-[32px]">
            <b>
              {countdown?.minutes().toString().length === 1
                ? "0" + countdown?.minutes().toString()
                : countdown?.minutes().toString()}
            </b>
          </div>
        </div>
        <div className="text-[32px] text-[#E07575]">:</div>
        <div>
          <div className="text-[12px]">Seconds</div>
          <div className="text-[32px]">
            <b>
              {countdown?.seconds().toString().length === 1
                ? "0" + countdown?.seconds().toString()
                : countdown?.seconds().toString()}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

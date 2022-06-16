import React from "react";
import "./style.css";
function Card({ data }) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          {!data?.country && (
            <h1 className="card-title"> bi' şey bulamadık :( </h1>
          )}
          {data?.country && <h1 className="card-title">{data?.country}</h1>}
          {data?.country && (
            <h4 className="card-subtitle">
              Aktif Covid 19 vakası: {data.cases.active} - Kritik Covid 19
              vakası: {data.cases.critical}
            </h4>
          )}
          {data?.country && (
            <h5 className="card-text">Toplam vaka: {data?.cases?.total}</h5>
          )}
          {data?.country && (
            <h5 className="card-text">Toplam ölüm: {data?.deaths?.total}</h5>
          )}
          {data?.country && (
            <h5 className="card-text">
              Toplam test satısı: {data?.tests?.total}
            </h5>
          )}
          {data?.country && (
            <h5 className="card-text">Popülasyon: {data?.population}</h5>
          )}
          {data?.country && <h4 className="card-text">Tarih: {data?.day}</h4>}
        </div>
      </div>
    </div>
  );
}

export default Card;

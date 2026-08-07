import logoAsset from "@/assets/logo-2.png.asset.json";

const LogoBadge = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-16 w-16",
    lg: "h-24 w-24",
  };

  return (
    <div className={`badge-logo flex-shrink-0 ${sizeClasses[size]}`}>
      <img src={logoAsset.url} alt="Salgado no Prato" className="h-full w-full object-cover" loading="lazy" />
    </div>
  );
};

export default LogoBadge;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Cpu, 
  Server, 
  HardDrive, 
  Network, 
  Shield, 
  Activity,
  Info
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Pricing constants for calculation
const BASE_PRICES = {
  CPU_PRICE: 25, // per vCPU
  RAM_PRICE: 12.50,  // per GB
  STORAGE_PRICE: 0.80, // per GB
  BANDWIDTH_EXTRA_PRICE: 299, // per TB after first free TB
  BACKUP_PRICE: 0.40, // per GB
  IPV4_PRICE: 25, // per IPv4 address
  WINDOWS_LICENSE: 170, // Windows Server license price
};

// Resource limits
const RESOURCE_LIMITS = {
  CPU_MIN: 1,
  CPU_MAX: 32,
  RAM_MIN: 2,
  RAM_MAX: 128,
  STORAGE_MIN: 50,
  STORAGE_MAX: 2000,
  BANDWIDTH_MIN: 500,
  BANDWIDTH_MAX: 10000,
};

interface TooltipInfoProps {
  content: string;
}

const TooltipInfo: React.FC<TooltipInfoProps> = ({ content }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Info className="h-4 w-4 text-muted-foreground ml-1 inline cursor-help" />
      </TooltipTrigger>
      <TooltipContent>
        <p className="max-w-xs">{content}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const PriceCalculatorSection = () => {
  const { t, language } = useLanguage();

  // State for slider values
  const [cpu, setCpu] = useState(4);
  const [ram, setRam] = useState(8);
  const [storage, setStorage] = useState(100);
  const [bandwidth, setBandwidth] = useState(1000);

  // State for add-ons
  const [dailyBackup, setDailyBackup] = useState(true);
  const [ddosProtection, setDdosProtection] = useState(true); // DDoS protection enabled by default
  const [ipv4Enabled, setIpv4Enabled] = useState(true); // IPv4 enabled state (default enabled)
  const [operatingSystem, setOperatingSystem] = useState("linux"); // OS selection state


  // Billing period selection (monthly/annually)
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  // Total price calculation
  const [totalPrice, setTotalPrice] = useState(0);
  const [monthlyEquivalent, setMonthlyEquivalent] = useState(0);
  const [savings, setSavings] = useState(0);

  // Billing period discounts
  const PERIOD_DISCOUNTS = {
    annual: 0.05,    // 5% discount
    biennial: 0.10,  // 10% discount
    triennial: 0.15, // 15% discount
    quadrennial: 0.20 // 20% discount
  };

  // Calculate price whenever inputs change
  useEffect(() => {
    // Base cost calculation
    let basePrice = 
      cpu * BASE_PRICES.CPU_PRICE +
      ram * BASE_PRICES.RAM_PRICE +
      storage * BASE_PRICES.STORAGE_PRICE;

    // Bandwidth pricing - charge for each 500GB over 1TB
    if (bandwidth > 1024) {
      const extra500GBs = Math.ceil((bandwidth - 1024) / 500);
      basePrice += extra500GBs * 159;
    }

    // Apply period discount
    const discount = PERIOD_DISCOUNTS[billingPeriod] || 0;
    const discountedPrice = basePrice * (1 - discount);


    // Storage pricing adjustment for over 1TB
    let storagePriceAdjustment = 0;
    if(storage > 1024){
      storagePriceAdjustment = (storage - 1024) * BASE_PRICES.STORAGE_PRICE;
      basePrice += storagePriceAdjustment;
    }

    // Add-ons
    if (dailyBackup) basePrice += (storage * BASE_PRICES.BACKUP_PRICE); // Backup cost per GB
    if (ipv4Enabled) basePrice += BASE_PRICES.IPV4_PRICE; // IPv4 address cost
    if (operatingSystem === "windows") basePrice += BASE_PRICES.WINDOWS_LICENSE;

    // Calculate monthly equivalent and savings
    let calculatedPrice = discountedPrice;
    let calculatedMonthly = discountedPrice;
    let calculatedSavings = basePrice - discountedPrice;

    setTotalPrice(calculatedPrice);
    setMonthlyEquivalent(calculatedMonthly);
    setSavings(calculatedSavings);
  }, [cpu, ram, storage, bandwidth, dailyBackup, ddosProtection, ipv4Enabled, operatingSystem, billingPeriod]);

  // Format price based on language
  const formatPrice = (price: number): string => {
    if (language === "pt-BR") {
      return `R$ ${price.toFixed(2).replace(".", ",")}`;
    } else if (language === "es-ES") {
      return `€ ${price.toFixed(2).replace(".", ",")}`;
    } else {
      return `$ ${price.toFixed(2)}`;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-inter">{t("calculator.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {t("calculator.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resource Configuration Panel */}
          <motion.div 
            className="lg:col-span-2 bg-white rounded-xl shadow-md p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">{t("calculator.resourceConfiguration")}</h3>

            {/* CPU */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <Cpu className="h-5 w-5 text-blue-600 mr-2" />
                  <Label htmlFor="cpu">{t("calculator.cpu")}</Label>
                  <TooltipInfo content={t("calculator.cpuTooltip")} />
                </div>
                <span className="text-lg font-medium">{cpu} vCPUs</span>
              </div>
              <Slider
                id="cpu"
                min={RESOURCE_LIMITS.CPU_MIN}
                max={RESOURCE_LIMITS.CPU_MAX}
                step={1}
                value={[cpu]}
                onValueChange={(value) => setCpu(value[0])}
                className="mt-2"
              />
            </div>

            {/* RAM */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <Server className="h-5 w-5 text-green-600 mr-2" />
                  <Label htmlFor="ram">{t("calculator.ram")}</Label>
                  <TooltipInfo content={t("calculator.ramTooltip")} />
                </div>
                <span className="text-lg font-medium">{ram} GB</span>
              </div>
              <Slider
                id="ram"
                min={RESOURCE_LIMITS.RAM_MIN}
                max={RESOURCE_LIMITS.RAM_MAX}
                step={2}
                value={[ram]}
                onValueChange={(value) => setRam(value[0])}
                className="mt-2"
              />
            </div>

            {/* Storage */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <HardDrive className="h-5 w-5 text-amber-600 mr-2" />
                  <Label htmlFor="storage">{t("calculator.storage")}</Label>
                  <TooltipInfo content={t("calculator.storageTooltip")} />
                </div>
                <span className="text-lg font-medium">{storage} GB</span>
              </div>
              <Slider
                id="storage"
                min={RESOURCE_LIMITS.STORAGE_MIN}
                max={RESOURCE_LIMITS.STORAGE_MAX}
                step={50}
                value={[storage]}
                onValueChange={(value) => setStorage(value[0])}
                className="mt-2"
              />
            </div>

            {/* Bandwidth */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <Network className="h-5 w-5 text-purple-600 mr-2" />
                  <Label htmlFor="bandwidth">{t("calculator.bandwidth")}</Label>
                  <TooltipInfo content={t("calculator.bandwidthTooltip")} />
                </div>
                <span className="text-lg font-medium">
                  {bandwidth < 1000 ? bandwidth : `${(bandwidth / 1000).toFixed(1)} TB`}
                </span>
              </div>
              <Slider
                id="bandwidth"
                min={RESOURCE_LIMITS.BANDWIDTH_MIN}
                max={RESOURCE_LIMITS.BANDWIDTH_MAX}
                step={500}
                value={[bandwidth]}
                onValueChange={(value) => setBandwidth(value[0])}
                className="mt-2"
              />
            </div>

            {/* Operating System */}
            <div className="mb-8">
              <h4 className="text-lg font-medium mb-4">Custo do Sistema Operacional</h4>
              <RadioGroup value={operatingSystem} onValueChange={setOperatingSystem} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="linux" id="linux" />
                  <Label htmlFor="linux">Linux (Free)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="windows" id="windows" />
                  <Label htmlFor="windows">Windows Server</Label>
                </div>
              </RadioGroup>
            </div>

            {/* IPv4 Address */}
            <div className="flex items-center justify-between mb-4 p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <Network className="h-5 w-5 text-blue-500 mr-3" />
                <div>
                  <Label htmlFor="ipv4">Endereço IPv4</Label>
                </div>
              </div>
              <Switch id="ipv4" checked={ipv4Enabled} onCheckedChange={setIpv4Enabled} />
            </div>

            {/* Addons */}
            <div className="mb-8">
              <h4 className="text-lg font-medium mb-4">{t("calculator.addons")}</h4>

              <div className="flex items-center justify-between mb-4 p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <Activity className="h-5 w-5 text-orange-500 mr-3" />
                  <div>
                    <Label htmlFor="backup">{t("calculator.dailyBackup")}</Label>
                    <p className="text-sm text-gray-500">{t("calculator.dailyBackupDescription")}</p>
                  </div>
                </div>
                <Switch 
                  id="backup" 
                  checked={dailyBackup} 
                  onCheckedChange={setDailyBackup} 
                />
              </div>

              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-red-500 mr-3" />
                  <div>
                    <Label htmlFor="ddos">{t("calculator.ddosProtection")}</Label>
                    <p className="text-sm text-gray-500">{t("calculator.ddosProtectionDescription")}</p>
                  </div>
                </div>
                <Switch 
                  id="ddos" 
                  checked={ddosProtection} 
                  onCheckedChange={setDdosProtection} 
                />
              </div>
            </div>
          </motion.div>

          {/* Pricing Panel */}
          <motion.div 
            className="bg-white rounded-xl shadow-md p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6">{t("calculator.pricingSummary")}</h3>

            {/* Billing Period Selection */}
            <div className="mb-6">
              <h4 className="text-md font-medium mb-3">{t("calculator.billingPeriod")}</h4>
              <RadioGroup 
                value={billingPeriod} 
                onValueChange={setBillingPeriod}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="annual" id="annual" />
                  <Label htmlFor="annual" className="flex items-center">
                    12x <span className="ml-2 text-sm text-green-600 font-medium">(5% de desconto)</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="biennial" id="biennial" />
                  <Label htmlFor="biennial" className="flex items-center">
                    24x <span className="ml-2 text-sm text-green-600 font-medium">(10% de desconto)</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="triennial" id="triennial" />
                  <Label htmlFor="triennial" className="flex items-center">
                    36x <span className="ml-2 text-sm text-green-600 font-medium">(15% de desconto)</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="quadrennial" id="quadrennial" />
                  <Label htmlFor="quadrennial" className="flex items-center">
                    48x <span className="ml-2 text-sm text-green-600 font-medium">(20% de desconto)</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Price Breakdown */}
            <div className="mb-6">
              <h4 className="text-md font-medium mb-3">{t("calculator.priceBreakdown")}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{t("calculator.computeResources")}</span>
                  <span>{formatPrice(cpu * BASE_PRICES.CPU_PRICE + ram * BASE_PRICES.RAM_PRICE)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("calculator.storage")}</span>
                  <span>{formatPrice(storage * BASE_PRICES.STORAGE_PRICE)}</span>
                </div>
                {dailyBackup && (
                  <div className="flex justify-between">
                    <span>{t("calculator.dailyBackup")}</span>
                    <span>{formatPrice(storage * BASE_PRICES.BACKUP_PRICE)}</span>
                  </div>
                )}
                {ipv4Enabled && (
                  <div className="flex justify-between">
                    <span>Endereço IPv4</span>
                    <span>{formatPrice(BASE_PRICES.IPV4_PRICE)}</span>
                  </div>
                )}
                {operatingSystem === "windows" && (
                  <div className="flex justify-between">
                    <span>Windows Server</span>
                    <span>{formatPrice(BASE_PRICES.WINDOWS_LICENSE)}</span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between font-medium">
                  <span>{t("calculator.total")}</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02]"
              onClick={() => window.open('https://wa.me/551146734420', '_blank')}>
              {t("calculator.contactSales")}
            </button>

            {/* Disclaimer */}
            <p className="text-xs text-gray-500 mt-4 text-center">
              {t("calculator.disclaimer")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculatorSection;
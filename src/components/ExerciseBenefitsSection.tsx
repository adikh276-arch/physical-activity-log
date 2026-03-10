import { useTranslation } from "react-i18next";

const ExerciseBenefitsSection = () => {
  const { t } = useTranslation();

  const chemicalCards = [
    {
      emoji: "🧘",
      title: t("endorphins_title"),
      description: t("endorphins_desc"),
    },
    {
      emoji: "🌿",
      title: t("serotonin_title"),
      description: t("serotonin_desc"),
    },
    {
      emoji: "⚡",
      title: t("dopamine_title"),
      description: t("dopamine_desc"),
    },
  ];

  const deeperCards = [
    {
      emoji: "🧠",
      title: t("memory_title"),
      description: t("memory_desc"),
    },
    {
      emoji: "😴",
      title: t("stress_title"),
      description: t("stress_desc"),
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-3">
          🧠 {t("benefits_title")}
        </h2>
        <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto mb-6">
          {t("benefits_subtitle")}
        </p>
        <p className="text-foreground text-center font-medium text-lg mb-10">
          {t("benefits_intro")}
        </p>

        {/* Chemical cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
          {chemicalCards.map((card) => (
            <div key={card.title} className="wellness-card-blue text-center space-y-2">
              <div className="text-3xl">{card.emoji}</div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="wellness-callout max-w-3xl mx-auto mb-10">
          <p className="text-base md:text-lg font-medium text-accent-foreground">
            💡 {t("benefits_callout")}
          </p>
        </div>

        <p className="text-foreground text-center font-medium text-lg mb-8 max-w-2xl mx-auto">
          {t("benefits_more")}
        </p>

        {/* Deeper cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {deeperCards.map((card) => (
            <div key={card.title} className="wellness-card space-y-2">
              <div className="text-2xl">{card.emoji}</div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExerciseBenefitsSection;
